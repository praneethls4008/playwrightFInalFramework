# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/full-page-tests/fullPageRegression.spec.ts >> QA_PLAYGROUND_BANK >> Check status code
- Location: tests/ui/full-page-tests/fullPageRegression.spec.ts:37:13

# Error details

```
Error: page.goto: Error resolving “qaplayground.com”: Name or service not known
Call log:
  - navigating to "https://qaplayground.com/bank/login", waiting until "domcontentloaded"

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
     |                                 ^ Error: page.goto: Error resolving “qaplayground.com”: Name or service not known
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