# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/full-page-tests/fullPageRegression.spec.ts >> QA_PLAYGROUND_BANK
- Location: tests/ui/full-page-tests/fullPageRegression.spec.ts:22:7

# Error details

```
Error: Header validation failed: page.goto: Protocol error (Playwright.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "", waiting until "load"


expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2]:
    - /url: "#main-content"
  - main [ref=e3]:
    - generic "Loading SecureBank" [ref=e4]
  - alert [ref=e15]
  - button "Send feedback or report an issue" [ref=e16] [cursor=pointer]:
    - img [ref=e17]
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
     |         ^ Error: Header validation failed: page.goto: Protocol error (Playwright.navigate): Cannot navigate to invalid URL
  38 | 
  39 |       
  40 |   }
  41 | 
  42 | 
  43 | }
```