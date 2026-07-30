import { getFullUrl } from "../../../../src/ui/helper/urlResolver";
import { expect, test } from "../../../../src/visual/visual.fixture";
import { gotoWithRetry, prepareForVisualTest, waitForAppReady, waitForFontsReady } from "../../../../src/visual/visual.helper";


test.describe('Lambda Ecommerce Home Page visual Test', () => {
  
  test(
    'Bank Dashboard Components',
    async ({lambdaPage}) => {
      
      const page = lambdaPage.getPage();

      const url = getFullUrl('LAMBDATEST_ECOMMERCE');


      await gotoWithRetry(page, url);
      await waitForAppReady(page, {readySelector: '#main-header'})

      await waitForFontsReady(page);

      await prepareForVisualTest(page);

      await expect(lambdaPage.getMainHeader()).toHaveScreenshot(
        'main-header.png',
        { maxDiffPixelRatio: 0.01 }
      )

      await expect(lambdaPage.getSubHeader()).toHaveScreenshot(
        'sub-header.png',
        { maxDiffPixelRatio: 0.01 }
      )

    }
  );

});
