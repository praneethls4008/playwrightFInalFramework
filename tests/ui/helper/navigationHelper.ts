import { Page} from "@playwright/test";


export async function navigateToUrl(
  page: Page,
  fullUrl: string,
) {
  // Use 'visible' state instead of 'attached' to ensure the page has actually rendered
  await Promise.all([
    page.goto(fullUrl, {
      waitUntil: "domcontentloaded",
      timeout: 30_000,
    }),
    page.locator("body").waitFor({ state: "visible", timeout: 30_000 }),
  ]);
}

