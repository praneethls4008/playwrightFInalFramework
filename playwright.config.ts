import { defineConfig, devices } from '@playwright/test';
import { env } from './config/environment.config';
import * as os from 'node:os';

const allureResultsDir =
  process.env.ALLURE_RESULTS_DIR ?? 'allure-results';

export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!env.CI,
  /* Retry on CI only */
  retries: env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["html"], // Optional: standard terminal output
    ['allure-playwright',
          {
            resultsDir: allureResultsDir,
            detail: true,
            suiteTitle: true,

            environmentInfo: {
              os_platform: os.platform(),
              os_release: os.release(),
              os_version: os.version(),
              node_version: process.version,
              test_environment:
                process.env.TEST_ENVIRONMENT ?? 'prod',
              jenkins_build:
                process.env.BUILD_NUMBER ?? 'local',
            },
          },
        ], //allure
  ] /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */,
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: BASE_URL,
    

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "ui-chromium",
      testDir: './tests/ui',
      testMatch: /.*\.spec\.ts/,
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "ui-firefox",
      testDir: './tests/ui',
      testMatch: /.*\.spec\.ts/,
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "ui-webkit",
      testDir: './tests/ui',
      testMatch: /.*\.spec\.ts/,
      use: { ...devices["Desktop Safari"] },
    },

    {
      name: 'e2e-chromium',
      testDir: './tests/e2e',
      testMatch: /.*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: "api",
      testDir: './tests/api',
      testMatch: /.*\.spec\.ts/,
      use: {
        baseURL: env.API_BASE_URL,
        extraHTTPHeaders: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }
    },


    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !env.CI,
  // },
});
