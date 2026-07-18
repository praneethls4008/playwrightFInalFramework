import { test } from "@playwright/test";
import { getUrlsToRun } from "../../../src/helper/getUrlsToRun";
import { PAGE } from "../../../src/data/urls/aem.urls.data";
import { validateFooter } from "../helper/footerComponentTests";
import { getFullUrl } from "../../../src/helper/urlResolver";

const PAGES_NAMES: Array<PAGE> = getUrlsToRun();

for (const pageName of PAGES_NAMES) {
  const full_url = getFullUrl(pageName);

  test(`${pageName} Disclaimer`, { tag: ["@Disclaimer"] }, async ({ page }) => {
    await page.goto(full_url);
    await page.waitForLoadState("load");
    validateFooter();
  });
}
