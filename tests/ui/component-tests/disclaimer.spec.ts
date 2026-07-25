import { expect, test } from "@playwright/test";
import { getUrlsToRun } from "../../../src/ui/helper/getUrlsToRun";
import { PAGE } from "../../../src/ui/constants/urls/aem.data";
import { validateDisclaimer } from "../helper/disclaimerComponentTest";
import { getFullUrl } from "../../../src/ui/helper/urlResolver";

const PAGES_NAMES: Array<PAGE> = getUrlsToRun();

for (const pageName of PAGES_NAMES) {
  const full_url = getFullUrl(pageName);

  test(`${pageName} Disclaimer`, { tag: ["@Disclaimer"] }, async ({ page }) => {
    await page.goto(full_url);
    await page.waitForLoadState("load");
    await validateDisclaimer();
    expect(true).toBe(true);
  });
}
