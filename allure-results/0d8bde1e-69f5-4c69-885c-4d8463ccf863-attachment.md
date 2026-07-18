# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/full-page-tests/fullPageRegression.spec.ts >> QA_PLAYGROUND_BANK
- Location: tests/ui/full-page-tests/fullPageRegression.spec.ts:32:9

# Error details

```
TimeoutError: page.goto: Timeout 3000ms exceeded.
Call log:
  - navigating to "https://qaplayground.com/bank/login", waiting until "domcontentloaded"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - main [ref=e3]:
    - generic "Loading SecureBank" [ref=e4]
```

# Test source

```ts
  1   | import { expect, Page, test } from "@playwright/test";
  2   | import { validateHeader } from "../helper/headerComponentTests";
  3   | import { PAGE } from "../../../src/data/urls/aem.urls.data"
  4   | import { getUrlsToRun } from "../../../src/helper/getUrlsToRun";
  5   | import { getFullUrl, getPageType } from "../../../src/helper/urlResolver";
  6   | import { validateFooter } from "../helper/footerComponentTests";
  7   | import { validateDisclaimer } from "../helper/disclaimerComponentTest";
  8   | import * as allure from "allure-js-commons";
  9   | 
  10  | const PAGES_NAMES:Array<PAGE> = getUrlsToRun();
  11  | 
  12  | 
  13  | for(const pageName of PAGES_NAMES){
  14  |     createFullPageRegressionSuite(pageName);
  15  | };
  16  | 
  17  | async function navigateToUrl(page:Page, fullUrl: string){
  18  |      
> 19  |     const response = await page.goto(fullUrl,
      |                                 ^ TimeoutError: page.goto: Timeout 3000ms exceeded.
  20  |     {
  21  |         waitUntil: 'domcontentloaded',
  22  |         timeout: 3000 //30-sec
  23  |     });
  24  |     await page.waitForSelector('body', {state: 'attached'});
  25  |     return response;
  26  | };
  27  | 
  28  | function createFullPageRegressionSuite(pageName: PAGE){
  29  |     const fullUrl = getFullUrl(pageName);
  30  |     const pageType = getPageType(pageName);
  31  | 
  32  |     test(`${pageName}`,
  33  |         { tag: ['@FullPageRegression'] },
  34  |         async({page}, testInfo)=>{
  35  |        
  36  |          //Page status check
  37  |         try{
  38  |             await test.step(`Check status code`, async()=>{
  39  |             const response = await navigateToUrl(page, fullUrl);
  40  |             expect(response?.status()).toBe(200);
  41  |         })
  42  |         }catch (e) {
  43  |           await allure.attachment(
  44  |             "Exception Stack Trace",
  45  |             e instanceof Error ? e.stack || e.message : String(e),
  46  |             "text/plain"
  47  |           );
  48  |         }
  49  |         
  50  | 
  51  |         //Header component validation
  52  |         try {
  53  |           await test.step(`Header`, async () => {
  54  |             await navigateToUrl(page, fullUrl);
  55  |             await validateHeader(page, pageType);
  56  |           });
  57  |         } catch (e) {
  58  |           await allure.attachment(
  59  |             "Exception Stack Trace",
  60  |             e instanceof Error ? e.stack || e.message : String(e),
  61  |             "text/plain"
  62  |           );
  63  | 
  64  |           // 2. Optional: Add the error message as a description or tag
  65  |           await allure.description(`Failed due to: ${e.message}`);
  66  | 
  67  |           // 3. Crucial: Rethrow the error so Playwright marks the test as FAILED
  68  |           throw e;
  69  |         }
  70  | 
  71  |         //Footer component validation
  72  |         try{
  73  |         await test.step(`Footer`, async () => {
  74  |             await validateFooter();
  75  |         });
  76  |         }catch (e) {
  77  |           await allure.attachment(
  78  |             "Exception Stack Trace",
  79  |             e instanceof Error ? e.stack || e.message : String(e),
  80  |             "text/plain"
  81  |           );
  82  |         }
  83  | 
  84  |         //Disclaimer component validation
  85  |         try{
  86  |         await test.step(`Disclaimer`, async () => {
  87  |             await validateDisclaimer();
  88  |         });
  89  |         }catch (e) {
  90  |           await allure.attachment(
  91  |             "Exception Stack Trace",
  92  |             e instanceof Error ? e.stack || e.message : String(e),
  93  |             "text/plain"
  94  |           );
  95  |         }
  96  | 
  97  |     });  
  98  | };
  99  | 
  100 | 
```