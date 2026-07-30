import { getFullUrl } from "../../../../src/ui/helper/urlResolver";
import { expect, test } from "../../../../src/visual/visual.fixture";
import { gotoWithRetry, prepareForVisualTest, waitForAppReady, waitForFontsReady } from "../../../../src/visual/visual.helper";


test.describe('Bank Dashboard Page visual Test', () => {
  
  test(
    'Bank Dashboard Components',
    async ({dashboardPage}) => {
      
      const page = dashboardPage.getPage();

      const url = getFullUrl('QA_PLAYGROUND_BANK_DASHBOARD');


      await gotoWithRetry(page, url);
      await page.waitForResponse((res) => res.url().includes('bank/dashboard') && res.ok())
      await waitForAppReady(page, {readySelector: '[data-testid="bank-sidebar"]'})

      await waitForFontsReady(page);

      await prepareForVisualTest(page);

      await expect(dashboardPage.getMainSidebar()).toHaveScreenshot(
        'main-sidebar.png',
        { maxDiffPixelRatio: 0.01 }
      )

      await expect(dashboardPage.getLogOutBtn()).toHaveScreenshot(
        'logout-button.png',
        { maxDiffPixelRatio: 0.01 }
      )

      await expect(dashboardPage.getQuickActionsSection()).toHaveScreenshot(
        'quick-actions-section.png',
        { maxDiffPixelRatio: 0.01 }
      )

    }
  );

});
