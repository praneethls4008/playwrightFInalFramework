# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/full-page-tests/fullPageRegression.spec.ts >> FAKE_STORE
- Location: tests/ui/full-page-tests/fullPageRegression.spec.ts:22:7

# Error details

```
Error: Header validation failed: page.goto: Protocol error (Page.navigate): Invalid url: ""
Call log:
  - navigating to "", waiting until "load"


expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation "main navigation" [ref=e4]:
    - generic [ref=e5]:
      - link "LetCode Home" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "LetCode" [ref=e7]
      - generic [ref=e8]:
        - link "Work-Space" [ref=e9] [cursor=pointer]:
          - /url: /test
        - generic [ref=e10]:
          - button "Products" [ref=e11] [cursor=pointer]:
            - text: Products
            - img [ref=e12]
          - generic:
            - link "Ortoni Report":
              - /url: /product/ortoni-report
            - link "LetXPath":
              - /url: /product/letxpath
            - link "Playwright Runner":
              - /url: /product/playwright-runner
        - generic [ref=e15]:
          - button "Grooming" [ref=e16] [cursor=pointer]:
            - text: Grooming
            - img [ref=e17]
          - generic:
            - link "Test Practice":
              - /url: /test-practice
            - link "Interview Q & A":
              - /url: /interview
            - link "Playwright Quiz":
              - /url: /pw-quiz
        - link "Courses" [ref=e20] [cursor=pointer]:
          - /url: /courses
        - link "Contact" [ref=e21] [cursor=pointer]:
          - /url: /contact
      - button "Switch to dark mode" [ref=e23] [cursor=pointer]:
        - img [ref=e24]
  - main [ref=e26]:
    - generic [ref=e29]:
      - generic [ref=e30]:
        - generic [ref=e31]:
          - heading "Fake Store" [level=1] [ref=e32]
          - heading "Products" [level=2] [ref=e33]
        - generic [ref=e34]:
          - link "" [ref=e35] [cursor=pointer]:
            - /url: /cart
            - generic [ref=e37]: 
          - link "" [ref=e38] [cursor=pointer]:
            - /url: /login
            - generic [ref=e40]: 
      - paragraph [ref=e43]: Loading products...
      - generic [ref=e44]:
        - text: "Credit: Built using"
        - link "Fakestoreapi" [ref=e45] [cursor=pointer]:
          - /url: https://fakestoreapi.com/
  - contentinfo [ref=e46]:
    - generic [ref=e47]:
      - paragraph [ref=e48]:
        - text: © 2026 LetCode ·
        - link "Koushik Chatterjee" [ref=e49] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/ortoni/
        - text: "&"
        - link "Bollineni Yaswanth" [ref=e50] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
      - generic [ref=e51]:
        - link "GitHub" [ref=e52] [cursor=pointer]:
          - /url: https://github.com/ortoniKC
          - img [ref=e53]
        - link "YouTube" [ref=e56] [cursor=pointer]:
          - /url: https://www.youtube.com/@letcode
          - img [ref=e57]
        - link "LinkedIn" [ref=e60] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/ortoni/
          - img [ref=e61]
        - link "Contact" [ref=e66] [cursor=pointer]:
          - /url: /contact
        - link "🍕 Support" [ref=e67] [cursor=pointer]:
          - /url: https://buymeacoffee.com/letcode
```

# Test source

```ts
  1  | import { expect, Page, test, TestInfo  } from "@playwright/test";
  2  | import { normalizeError } from "../../../src/helper/errorResolver";
  3  | import * as allure from "allure-js-commons";
  4  | 
  5  | export async function runComponentStep(
  6  |   componentName: string,
  7  |   page: Page,
  8  |   testInfo: TestInfo,
  9  |   validationFunction: () => Promise<void>,
  10 | ) {
  11 | 
  12 |   try{
  13 |       await test.step(componentName, async() => {
  14 |       await validationFunction();
  15 |     });
  16 |   } catch (error: unknown) {
  17 |       const componentError = normalizeError(error);
  18 | 
  19 |       /*
  20 |      * Attach complete stack trace to Allure.
  21 |      */
  22 |       await allure.attachment(
  23 |         `${componentName} - Exception Stack Trace`,
  24 |         componentError.stack ?? componentError.message,
  25 |         "text/plain",
  26 |       );
  27 | 
  28 |       testInfo.annotations.push({
  29 |       type: "component-failure",
  30 |       description:
  31 |         `${componentName}: ${componentError.message}`,
  32 |       });
  33 | 
  34 |       expect.soft(
  35 |         false,
  36 |         `${componentName} validation failed: ${componentError.message}`,
> 37 |       ).toBe(true);
     |         ^ Error: Header validation failed: page.goto: Protocol error (Page.navigate): Invalid url: ""
  38 | 
  39 |       
  40 |   }
  41 | 
  42 | 
  43 | }
```