# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/component-tests/header.spec.ts >> QA_PLAYGROUND Header
- Location: tests/ui/component-tests/header.spec.ts:14:9

# Error details

```
Error: page.waitForURL: Test ended.
=========================== logs ===========================
waiting for navigation to "/auth/sign-in" until "load"
  navigated to "https://qaplayground.com/auth/sign-in"
============================================================
```

# Test source

```ts
  1  | import test, { expect, Page } from "@playwright/test";
  2  | import { PAGE, PageType } from "../../../../src/data/urls/aem.urls.data";
  3  | import { QAPlaygroundHeaderComponent } from "../../../../src/component/header/QAPlaygroundHeaderComponent";
  4  | import { QAPlaygroundHeaderData } from "../../../../src/data/component/header/qaPlaygroundHeader.data";
  5  | 
  6  | export async function validateQAPlaygroundHeader(page: Page, pageType: PageType, pageName: PAGE) {
  7  |     const headerComponent = new QAPlaygroundHeaderComponent(page);
  8  | 
  9  |     test.step('Banner Validation',
  10 |       async() => {
  11 |         const actualBannerText = await headerComponent.getBannerText();
  12 |         expect.soft(actualBannerText, 'banner text is not as expected').toBe(QAPlaygroundHeaderData.banner.text);
  13 | 
  14 |         const actualBannerLink = await headerComponent.getBannerLink();
  15 |         expect.soft(actualBannerLink, 'banner link is not as expected').toBe((QAPlaygroundHeaderData.banner.href));
  16 |       }
  17 |     )
  18 | 
  19 | 
  20 |     test.step('Menu validation',
  21 |       async() => {
  22 |         const actualMenusItems = await headerComponent.getMenuLinks();
  23 |         expect.soft(actualMenusItems, 'Menu Items are not as expected').toEqual(QAPlaygroundHeaderData.menuItems);
  24 | 
  25 |       }
  26 |     )
  27 | 
  28 | 
  29 |     test.step('login btn validation',
  30 |       async() => {
  31 |         await Promise.all([
> 32 |           page.waitForURL(QAPlaygroundHeaderData.loginBtnHref),
     |                ^ Error: page.waitForURL: Test ended.
  33 |           headerComponent.clickLoginOrSignupBtn()
  34 |         ]);
  35 |         await expect.soft(page, 'Login btn redirection is not as expected').toHaveURL(QAPlaygroundHeaderData.loginBtnHref);
  36 |       }
  37 |     )
  38 | }
  39 | 
```