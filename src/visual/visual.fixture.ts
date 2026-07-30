import { expect, Page } from '@playwright/test';
import { initAnimationKiller } from './visual.helper';
import { test as base } from '../ui/fixtures/auth.fixture';
import { DashboardPage } from '../ui/pages/dashboard.page';
import { HomePage } from '../ui/pages/lambda-ecommerce/home.page';

type VisualFixture = {
  page: Page,
  dashboardPage: DashboardPage
  lambdaPage: HomePage
}

export const test = base.extend<VisualFixture>({
  page: async ({ page }, use) => {
    await initAnimationKiller(page);
    await use(page);
  },
  dashboardPage: async({ adminPage }, use) => {
    await initAnimationKiller(adminPage);
    await use(new DashboardPage(adminPage));
  },

  lambdaPage: async({ page }, use) => {
    await initAnimationKiller(page);
    await use(new HomePage(page));
  },


});

export { expect };