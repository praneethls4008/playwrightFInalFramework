# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/component-tests/header.spec.ts >> QA_PLAYGROUND Header
- Location: tests/ui/component-tests/header.spec.ts:14:9

# Error details

```
Error: locator.getAttribute: Test ended.
Call log:
  - waiting for getByRole('navigation', { name: 'Main navigation' }).getByRole('list').getByRole('link').nth(4)

```

# Test source

```ts
  1  | import { Locator } from "@playwright/test";
  2  | import { anchorEleType } from "../../types/commonElementTypes";
  3  | 
  4  |   export async function extractAnchorElementsData(locators: Locator[]){
  5  |         let anchorElements: anchorEleType[] = [];
  6  |         for(const anchrorEle of locators){
  7  |             anchorElements.push({
  8  |                 text: await anchrorEle.textContent(),
> 9  |                 href: await anchrorEle.getAttribute('href')
     |                                        ^ Error: locator.getAttribute: Test ended.
  10 |             });
  11 |         }
  12 |         return anchorElements;
  13 |     }
```