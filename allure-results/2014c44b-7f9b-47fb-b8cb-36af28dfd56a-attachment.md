# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/full-page-tests/fullPageRegression.spec.ts >> FAKE_STORE
- Location: tests/ui/full-page-tests/fullPageRegression.spec.ts:32:9

# Error details

```
TimeoutError: page.goto: Timeout 3000ms exceeded.
Call log:
  - navigating to "https://letcode.in/home", waiting until "domcontentloaded"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation "main navigation" [ref=e4]:
    - generic [ref=e5]:
      - link "LetCode Home":
        - /url: /
        - img "LetCode"
      - generic [ref=e6]:
        - link "Work-Space" [ref=e7] [cursor=pointer]:
          - /url: /test
        - generic [ref=e8]:
          - button "Products" [ref=e9] [cursor=pointer]:
            - text: Products
            - img [ref=e10]
          - generic:
            - link "Ortoni Report":
              - /url: /product/ortoni-report
            - link "LetXPath":
              - /url: /product/letxpath
            - link "Playwright Runner":
              - /url: /product/playwright-runner
        - generic [ref=e13]:
          - button "Grooming" [ref=e14] [cursor=pointer]:
            - text: Grooming
            - img [ref=e15]
          - generic:
            - link "Test Practice":
              - /url: /test-practice
            - link "Interview Q & A":
              - /url: /interview
            - link "Playwright Quiz":
              - /url: /pw-quiz
        - link "Courses" [ref=e18] [cursor=pointer]:
          - /url: /courses
        - link "Contact" [ref=e19] [cursor=pointer]:
          - /url: /contact
      - button "Switch to dark mode" [ref=e21] [cursor=pointer]:
        - img [ref=e22]
  - main [ref=e24]:
    - generic [ref=e27]:
      - generic [ref=e28]:
        - generic [ref=e29]:
          - heading "Fake Store" [level=1] [ref=e30]
          - heading "Products" [level=2] [ref=e31]
        - generic [ref=e32]:
          - link "" [ref=e33] [cursor=pointer]:
            - /url: /cart
            - generic [ref=e35]: 
          - link "" [ref=e36] [cursor=pointer]:
            - /url: /login
            - generic [ref=e38]: 
      - paragraph [ref=e41]: Loading products...
      - generic [ref=e42]:
        - text: "Credit: Built using"
        - link "Fakestoreapi" [ref=e43] [cursor=pointer]:
          - /url: https://fakestoreapi.com/
  - contentinfo [ref=e44]:
    - generic [ref=e45]:
      - paragraph [ref=e46]:
        - text: © 2026 LetCode ·
        - link "Koushik Chatterjee" [ref=e47] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/ortoni/
        - text: "&"
        - link "Bollineni Yaswanth" [ref=e48] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
      - generic [ref=e49]:
        - link "GitHub" [ref=e50] [cursor=pointer]:
          - /url: https://github.com/ortoniKC
          - img [ref=e51]
        - link "YouTube" [ref=e54] [cursor=pointer]:
          - /url: https://www.youtube.com/@letcode
          - img [ref=e55]
        - link "LinkedIn" [ref=e58] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/ortoni/
          - img [ref=e59]
        - link "Contact" [ref=e64] [cursor=pointer]:
          - /url: /contact
        - link "🍕 Support" [ref=e65] [cursor=pointer]:
          - /url: https://buymeacoffee.com/letcode
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