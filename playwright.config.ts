import { defineConfig, devices } from '@playwright/test';

import * as path from "path";
import { config as dotenvConfig } from "dotenv";
type DotenvConfigFn = (options?: { path?: string; encoding?: string }) => void;

// Cast it to a specific function type to clear the linter check
let currEnv;
switch(process.env.NODE_ENV){
  case "PROD":
    currEnv = ".env.prod";
    break;
  case "DEV":
    currEnv = ".env.dev";
    break;
  default:
    currEnv = ".env";
    break;
}

(dotenvConfig as DotenvConfigFn)({ path: path.resolve(__dirname, currEnv) })
console.log(`env val: ${process.env.API_BASE_URL}`)

export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["html"], // Optional: standard terminal output
    ["allure-playwright", { outputFolder: "allure-results" }], //allure
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
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      testIgnore: /.*\.api\.spec\.ts/,
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
      testIgnore: /.*\.api\.spec\.ts/,
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
      testIgnore: /.*\.api\.spec\.ts/,
    },

    {
      name: "api",
      testMatch: /.*\.api\.spec\.ts/,
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
  //   reuseExistingServer: !process.env.CI,
  // },
});
