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
    - generic [ref=e6]:
      - generic [ref=e7]:
        - img [ref=e9]
        - generic [ref=e13]:
          - heading "SecureBank" [level=1] [ref=e14]
          - paragraph [ref=e15]: Sign in to your account
      - generic [ref=e16]:
        - form "Sign in form" [ref=e17]:
          - generic [ref=e18]:
            - generic [ref=e19]: Username
            - textbox "Username" [ref=e20]:
              - /placeholder: Enter username
          - generic [ref=e21]:
            - generic [ref=e22]: Password
            - generic [ref=e23]:
              - textbox "Password" [ref=e24]:
                - /placeholder: Enter password
              - button "Show password" [ref=e25]:
                - img [ref=e26]
          - generic [ref=e29]:
            - checkbox "Remember me" [ref=e30]
            - checkbox [ref=e31]
            - generic [ref=e32] [cursor=pointer]: Remember me
          - button "Sign in to SecureBank" [ref=e33]: Sign In
        - link "Forgot password?" [ref=e35] [cursor=pointer]:
          - /url: /bank/forgot-password
      - generic [ref=e36]:
        - paragraph [ref=e37]: Test credentials
        - table [ref=e39]:
          - rowgroup [ref=e40]:
            - row "Username Password Description" [ref=e41]:
              - columnheader "Username" [ref=e42]
              - columnheader "Password" [ref=e43]
              - columnheader "Description" [ref=e44]
          - rowgroup [ref=e45]:
            - row "standard_user Copy username standard_user bank_sauce Copy password for standard_user Full access" [ref=e46]:
              - cell "standard_user Copy username standard_user" [ref=e47]:
                - generic [ref=e48]:
                  - text: standard_user
                  - button "Copy username standard_user" [ref=e49]:
                    - img [ref=e50]
              - cell "bank_sauce Copy password for standard_user" [ref=e53]:
                - generic [ref=e54]:
                  - text: bank_sauce
                  - button "Copy password for standard_user" [ref=e55]:
                    - img [ref=e56]
              - cell "Full access" [ref=e59]
            - row "locked_user Copy username locked_user bank_sauce Copy password for locked_user Locked account" [ref=e60]:
              - cell "locked_user Copy username locked_user" [ref=e61]:
                - generic [ref=e62]:
                  - text: locked_user
                  - button "Copy username locked_user" [ref=e63]:
                    - img [ref=e64]
              - cell "bank_sauce Copy password for locked_user" [ref=e67]:
                - generic [ref=e68]:
                  - text: bank_sauce
                  - button "Copy password for locked_user" [ref=e69]:
                    - img [ref=e70]
              - cell "Locked account" [ref=e73]
            - row "frozen_user Copy username frozen_user bank_sauce Copy password for frozen_user Frozen — no transfers" [ref=e74]:
              - cell "frozen_user Copy username frozen_user" [ref=e75]:
                - generic [ref=e76]:
                  - text: frozen_user
                  - button "Copy username frozen_user" [ref=e77]:
                    - img [ref=e78]
              - cell "bank_sauce Copy password for frozen_user" [ref=e81]:
                - generic [ref=e82]:
                  - text: bank_sauce
                  - button "Copy password for frozen_user" [ref=e83]:
                    - img [ref=e84]
              - cell "Frozen — no transfers" [ref=e87]
            - row "overdraft_user Copy username overdraft_user bank_sauce Copy password for overdraft_user Negative balance" [ref=e88]:
              - cell "overdraft_user Copy username overdraft_user" [ref=e89]:
                - generic [ref=e90]:
                  - text: overdraft_user
                  - button "Copy username overdraft_user" [ref=e91]:
                    - img [ref=e92]
              - cell "bank_sauce Copy password for overdraft_user" [ref=e95]:
                - generic [ref=e96]:
                  - text: bank_sauce
                  - button "Copy password for overdraft_user" [ref=e97]:
                    - img [ref=e98]
              - cell "Negative balance" [ref=e101]
            - row "slow_user Copy username slow_user bank_sauce Copy password for slow_user Slow loading" [ref=e102]:
              - cell "slow_user Copy username slow_user" [ref=e103]:
                - generic [ref=e104]:
                  - text: slow_user
                  - button "Copy username slow_user" [ref=e105]:
                    - img [ref=e106]
              - cell "bank_sauce Copy password for slow_user" [ref=e109]:
                - generic [ref=e110]:
                  - text: bank_sauce
                  - button "Copy password for slow_user" [ref=e111]:
                    - img [ref=e112]
              - cell "Slow loading" [ref=e115]
            - row "error_user Copy username error_user bank_sauce Copy password for error_user Wrong loan total" [ref=e116]:
              - cell "error_user Copy username error_user" [ref=e117]:
                - generic [ref=e118]:
                  - text: error_user
                  - button "Copy username error_user" [ref=e119]:
                    - img [ref=e120]
              - cell "bank_sauce Copy password for error_user" [ref=e123]:
                - generic [ref=e124]:
                  - text: bank_sauce
                  - button "Copy password for error_user" [ref=e125]:
                    - img [ref=e126]
              - cell "Wrong loan total" [ref=e129]
            - row "admin_user Copy username admin_user admin_sauce Copy password for admin_user Admin view" [ref=e130]:
              - cell "admin_user Copy username admin_user" [ref=e131]:
                - generic [ref=e132]:
                  - text: admin_user
                  - button "Copy username admin_user" [ref=e133]:
                    - img [ref=e134]
              - cell "admin_sauce Copy password for admin_user" [ref=e137]:
                - generic [ref=e138]:
                  - text: admin_sauce
                  - button "Copy password for admin_user" [ref=e139]:
                    - img [ref=e140]
              - cell "Admin view" [ref=e143]
  - alert [ref=e144]
  - button "Send feedback or report an issue" [ref=e145] [cursor=pointer]:
    - img [ref=e146]
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