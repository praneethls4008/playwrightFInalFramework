# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/full-page-tests/fullPageRegression.spec.ts >> LAMBDATEST_ECOMMERCE >> Header
- Location: tests/ui/full-page-tests/fullPageRegression.spec.ts:43:13

# Error details

```
Error: page.goto: NS_ERROR_UNKNOWN_HOST
Call log:
  - navigating to "https://ecommerce-playground.lambdatest.io/", waiting until "domcontentloaded"

```

# Page snapshot

```yaml
- article "Server Not Found" [ref=e3]:
  - img "Illustration of a fox looking at disconnected network cables." [ref=e5]
  - generic [ref=e7]:
    - heading "Server Not Found" [level=1] [ref=e8]
    - paragraph [ref=e9]:
      - text: Nightly can’t connect to the server at
      - strong [ref=e10]: ecommerce-playground.lambdatest.io
    - generic [ref=e11]:
      - heading "What can you do about it?" [level=3] [ref=e12]
      - paragraph [ref=e13]: Try connecting on a different device. Check your modem or router. Disconnect and reconnect to Wi-Fi.
    - paragraph [ref=e14]:
      - link "Learn more…" [ref=e15] [cursor=pointer]:
        - /url: https://support.mozilla.org/1/firefox/151.0/Linux/en-US/server-not-found-connection-problem
    - button "Try Again" [ref=e18]:
      - generic [ref=e20]:
        - generic: Try Again
```

# Test source

```ts
  1  | import { expect, Page, test } from "@playwright/test";
  2  | import { validateHeader } from "../helper/headerComponentTests";
  3  | import { PAGE } from "../../../src/data/urls/aem.urls.data"
  4  | import { getUrlsToRun } from "../../../src/helper/getUrlsToRun";
  5  | import { getFullUrl, getPageType } from "../../../src/helper/urlResolver";
  6  | import { validateFooter } from "../helper/footerComponentTests";
  7  | import { validateDisclaimer } from "../helper/disclaimerComponentTest";
  8  | 
  9  | 
  10 | const PAGES_NAMES:Array<PAGE> = getUrlsToRun();
  11 | 
  12 | 
  13 | for(const pageName of PAGES_NAMES){
  14 |     createFullPageRegressionSuite(pageName);
  15 | };
  16 | 
  17 | async function navigateToUrl(page:Page, fullUrl: string){
  18 |      
> 19 |     const response = await page.goto(fullUrl,
     |                                 ^ Error: page.goto: NS_ERROR_UNKNOWN_HOST
  20 |     {
  21 |         waitUntil: 'domcontentloaded',
  22 |         timeout: 3000 //30-sec
  23 |     });
  24 |     await page.waitForSelector('body', {state: 'attached'});
  25 |     return response;
  26 | };
  27 | 
  28 | function createFullPageRegressionSuite(pageName: PAGE){
  29 |     const fullUrl = getFullUrl(pageName);
  30 |     const pageType = getPageType(pageName);
  31 | 
  32 |     test.describe(`${pageName}`,
  33 |         { tag: ['@FullPageRegression'] },
  34 |         ()=>{
  35 |        
  36 |          //Page status check
  37 |         test(`Check status code`, async({page})=>{
  38 |             const response = await navigateToUrl(page, fullUrl);
  39 |             expect(response?.status()).toBe(200);
  40 |         })
  41 | 
  42 |         //Header component validation
  43 |         test(`Header`, async ({page}) => {
  44 |             await navigateToUrl(page, fullUrl);
  45 |             await validateHeader(page, pageType);
  46 |         });
  47 | 
  48 |         //Footer component validation
  49 |         test(`Footer`, async () => {
  50 |             await validateFooter();
  51 |         });
  52 | 
  53 |         //Disclaimer component validation
  54 |         test(`Disclaimer`, async () => {
  55 |             await validateDisclaimer();
  56 |         });
  57 | 
  58 |     });  
  59 | };
  60 | 
  61 | 
```