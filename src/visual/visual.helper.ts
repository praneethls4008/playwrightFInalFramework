import type { Page } from '@playwright/test';

/**
 * Installs a <style> tag on every document BEFORE the page's own scripts
 * run (via addInitScript), forcing all CSS animations/transitions to
 * duration 0. This catches things Playwright's `animations: 'disabled'`
 * screenshot option misses on its own, and — because it runs at
 * document_start — it also prevents the "flash of animating content"
 * that happens if you only inject CSS after load.
 *
 * Call this once per `page` (e.g. from a fixture) before any navigation.
 */
export async function initAnimationKiller(page: Page): Promise<void> {
  await page.addInitScript(() => {
    const css = `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: -1ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
        scroll-behavior: auto !important;
      }
      html {
        scroll-behavior: auto !important;
      }
    `;
    const apply = () => {
      const style = document.createElement('style');
      style.setAttribute('data-visual-test-animation-killer', 'true');
      style.textContent = css;
      document.head.appendChild(style);
    };
    if (document.head) {
      apply();
    } else {
      document.addEventListener('DOMContentLoaded', apply, { once: true });
    }
  });
}

/**
 * Same CSS override, injected on-demand into the current page (useful if
 * you didn't set up the fixture, or want to (re)apply after SPA route
 * changes that swap out the DOM).
 */
export async function disableAnimations(page: Page): Promise<void> {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: -1ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
        scroll-behavior: auto !important;
      }
    `,
  });
}

/** Pauses <video> elements and freezes them on their current frame. */
export async function pauseVideos(page: Page): Promise<void> {
  await page.evaluate(() => {
    document.querySelectorAll('video').forEach((v) => v.pause());
  });
}

/**
 * Scrolls incrementally through the full page and back to the top.
 * This is the key trick for lazy-loaded images/sections: most lazy-load
 * implementations (native loading="lazy" or IntersectionObserver-based
 * libraries) only fetch content once it nears the viewport, so a screenshot
 * taken without scrolling first will show blank placeholders below the fold.
 */
export async function autoScroll(
  page: Page,
  options: { step?: number; delayMs?: number } = {}
): Promise<void> {
  const { step = 400, delayMs = 120 } = options;

  await page.evaluate(
    async ({ step, delayMs }) => {
      await new Promise<void>((resolve) => {
        let total = 0;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, step);
          total += step;
          if (total >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, delayMs);
      });
    },
    { step, delayMs }
  );

  // Back to a deterministic starting position for the screenshot.
  await page.evaluate(() => window.scrollTo(0, 0));
}

/**
 * Waits until every <img> currently in the DOM has actually finished
 * loading (as opposed to just being present in markup with a broken/empty
 * src while lazy loading resolves). Must be called AFTER autoScroll(), since
 * scrolling is what triggers the lazy loaders to start fetching in the
 * first place.
 */
export async function waitForImagesLoaded(page: Page, timeout = 15_000): Promise<void> {
  await page.waitForFunction(
    () => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs.every((img) => img.complete && img.naturalWidth > 0);
    },
    undefined,
    { timeout }
  );
}

/** Waits for web fonts to finish loading, avoiding fallback-font flashes in screenshots. */
export async function waitForFontsReady(page: Page): Promise<void> {
  await page.evaluate(() => document.fonts.ready);
}

/**
 * Waits for an app-defined "ready" signal instead of relying on generic
 * network idle (which is unreliable for apps with polling, websockets, or
 * analytics beacons that never go quiet). Prefer this over networkidle
 * whenever the app exposes a loading spinner or a stable root element.
 */
export async function waitForAppReady(
  page: Page,
  options: { readySelector?: string; loadingSelector?: string; timeout?: number } = {}
): Promise<void> {
  const { readySelector, loadingSelector, timeout = 30_000 } = options;

  if (loadingSelector) {
    await page
      .locator(loadingSelector)
      .waitFor({ state: 'hidden', timeout })
      .catch(() => {
        /* spinner may never have appeared — not fatal */
      });
  }
  if (readySelector) {
    await page.locator(readySelector).waitFor({ state: 'visible', timeout });
  }
}

/**
 * Navigates with retries. Slow/flaky environments occasionally time out on
 * the first attempt (cold caches, cold serverless functions, etc.) — retry
 * a couple of times with backoff instead of failing the whole test.
 */
export async function gotoWithRetry(
  page: Page,
  url: string,
  options: { retries?: number; timeout?: number } = {}
): Promise<void> {
  const { retries = 3, timeout = 30_000 } = options;
  let lastError: unknown;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout });
      return;
    } catch (err) {
      lastError = err;
      await page.waitForTimeout(1000 * attempt);
    }
  }
  throw lastError;
}

export interface PrepareOptions {
  /** Scroll through the page to trigger lazy-loaded images/sections. Default true. */
  scrollThroughPage?: boolean;
  /** Wait for all <img> tags to finish loading. Default true. */
  waitForImages?: boolean;
  /** Wait for document.fonts.ready. Default true. */
  waitForFonts?: boolean;
  /** Re-apply the CSS animation-killer (useful after SPA route changes). Default true. */
  killAnimations?: boolean;
  /** Pause <video> elements. Default true. */
  stopVideos?: boolean;
  /** Extra fixed wait in ms as a last-resort safety net. Default 0 (avoid relying on this). */
  extraWaitMs?: number;
}

/**
 * One-call combinator: put this right before `expect(page).toHaveScreenshot()`.
 * Order matters — animations are killed first, then we scroll (which triggers
 * lazy loads), then we wait for the things that scrolling triggered.
 */
export async function prepareForVisualTest(page: Page, opts: PrepareOptions = {}): Promise<void> {
  const {
    scrollThroughPage = true,
    waitForImages = true,
    waitForFonts = true,
    killAnimations = true,
    stopVideos = true,
    extraWaitMs = 0,
  } = opts;

  if (killAnimations) await disableAnimations(page);
  if (stopVideos) await pauseVideos(page);
  if (scrollThroughPage) await autoScroll(page);
  if (waitForImages) await waitForImagesLoaded(page);
  if (waitForFonts) await waitForFontsReady(page);
  if (extraWaitMs > 0) await page.waitForTimeout(extraWaitMs);
}