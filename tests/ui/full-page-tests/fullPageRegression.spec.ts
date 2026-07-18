import { expect, test } from "@playwright/test";
import { validateHeader } from "../helper/header/headerComponentTests";
import { PAGE } from "../../../src/data/urls/aem.urls.data";
import { getUrlsToRun } from "../../../src/helper/getUrlsToRun";
import { getFullUrl, getPageType } from "../../../src/helper/urlResolver";
import { validateFooter } from "../helper/footerComponentTests";
import { validateDisclaimer } from "../helper/disclaimerComponentTest";
import { runComponentStep } from "../helper/runComponent";
import { navigateToUrl } from "../helper/navigationHelper";

const PAGES_NAMES: Array<PAGE> = getUrlsToRun();

for (const pageName of PAGES_NAMES) {
  createFullPageRegressionTest(pageName);
}

function createFullPageRegressionTest(pageName: PAGE) {
  const fullUrl = getFullUrl(pageName);
  const pageType = getPageType(pageName);
  const navigationSuccessful = false;

   
  test(
    `${pageName}`,
    { 
      tag: ["@FullPageRegression"] 
    },
    async ({ page }, testInfo) => {
  
      testInfo.setTimeout(120_000);
      
      //Navigation validation

      await test.step(
        "Navigate and validate response",
        async() => {
          await navigateToUrl(page, fullUrl);
          const currentUrl = page.url().toLowerCase();
          expect(currentUrl).toContain(fullUrl.toLowerCase());
          
        }
      );


      //Skips component tets if navigation of url is failed(statuscode error or redirect of page)
      // eslint-disable-next-line playwright/no-skipped-test
      test.skip(
          !navigationSuccessful,
          'Component validations were skipped because navigation was not a direct 2xx response.'
        );

      

      //Header validation
      await runComponentStep(
        "Header",
        page,
        testInfo,
        async () => {
          await validateHeader(page, pageType, pageName);
        }
      );

      //Disclaimer validation
      await runComponentStep(
        "Disclaimer",
        page,
        testInfo,
        async () => {
          await validateDisclaimer();
        }
      );

      //Footer validation
      await runComponentStep(
        "Footer",
        page,
        testInfo,
        async() => {
          await validateFooter();
        }
      );
      
      
    }
  );
}
