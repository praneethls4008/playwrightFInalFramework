import { defineConfig, devices } from '@playwright/test';
import { env } from './config/environment.config';
import * as os from 'node:os';

const allureResultsDir =
  env.ALLURE_RESULTS_DIR ?? 'allure-results';

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
  reporter: env.CI
    ? [
      // Jenkins console output
      ['line'],

      // Used to merge all shard results into one Playwright HTML report
      ['blob'],

      // Generates raw Allure results for each shard
      [
        'allure-playwright',
        {
          resultsDir: allureResultsDir,
          detail: true,
          suiteTitle: true,

          environmentInfo: {
            os_platform: os.platform(),
            os_release: os.release(),
            os_version: os.version(),
            node_version: process.version,
            test_environment: env.REGION,
            jenkins_build: env.BUILD_NUMBER,
          },
        },
      ],
    ]
    : [
      // Local terminal output
      ['line'],

      // Local Playwright HTML report
      [
        'html',
        {
          outputFolder: 'playwright-report',
          open: 'never',
        },
      ],

      // Local Allure results
      [
        'allure-playwright',
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
              process.env.TEST_ENVIRONMENT ?? 'local',
          },
        },
      ],
    ],


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

    {
      name: 'visual-chromium',
      testDir: './tests/visual',
      testMatch: /.*\.spec\.ts/, 
      expect: {
        timeout: 15_000,
        toHaveScreenshot: {
          animations: 'disabled',

          // Hide blinking input/text-area carets.
          caret: 'hide',
          scale: 'css',
          threshold: 0.2,
          maxDiffPixelRatio: 0.001,
          pathTemplate: './resources/visual/{projectName}/{testFilePath}/{arg}{ext}',
          timeout: 30_000,
        },
      },
      use:{
        ...devices['Desktop Chrome'],
        viewport: {
          width: 1440,
          height: 900,
        },

        deviceScaleFactor: 1,
        colorScheme: 'light',
        locale: 'en-US',
        timezoneId: 'UTC',

        actionTimeout: 15_000,
        navigationTimeout: 45_000,

        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: 'retain-on-failure',
      },
    }


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
