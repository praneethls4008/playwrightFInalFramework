# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/full-page-tests/fullPageRegression.spec.ts >> QA_PLAYGROUND_BANK
- Location: tests/ui/full-page-tests/fullPageRegression.spec.ts:32:9

# Error details

```
TimeoutError: locator.click: Timeout 1000ms exceeded.
Call log:
  - waiting for getByTestId('header').locator('//btn[@class="arrow"]').first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2]:
    - /url: "#main-content"
  - main [ref=e3]:
    - generic "Loading SecureBank" [ref=e4]
```

# Test source

```ts
  1  | import {test, Locator, Page} from '@playwright/test';
  2  | 
  3  | type anchorEleType = {
  4  |     text: string | null,
  5  |     href: string | null
  6  | }
  7  | 
  8  | export type HeaderDataType = Array<anchorEleType>;
  9  | 
  10 | export class HeaderComponent{
  11 | 
  12 |     private readonly page: Page;
  13 |     private readonly headerLocator: Locator;
  14 |     private readonly subNavLocator: Locator;
  15 |     private readonly subNavAnchorLocator: Locator;
  16 | 
  17 |     constructor(page: Page){
  18 |         this.page = page;
  19 |         this.headerLocator = this.page.getByTestId('header');
  20 |         this.subNavLocator = this.headerLocator.locator('//btn[@class="arrow"]');
  21 |         this.subNavAnchorLocator = this.subNavLocator.getByRole('listitem');
  22 |     }
  23 | 
  24 |     async openSubnav(subnavIndex: number){
> 25 |         await this.subNavLocator.nth(subnavIndex).click({timeout: 1000});
     |                                                   ^ TimeoutError: locator.click: Timeout 1000ms exceeded.
  26 |     }
  27 | 
  28 |     async getAnchorElements(){
  29 |         const anchorElements: HeaderDataType|undefined = [];
  30 |         for(const anchrorEle of await this.subNavAnchorLocator.all()){
  31 |             anchorElements.push({
  32 |                 text: await anchrorEle.textContent(),
  33 |                 href: await anchrorEle.getAttribute('href')
  34 |             });
  35 |         }
  36 |         return anchorElements;
  37 |     }
  38 | 
  39 |     
  40 |     
  41 | 
  42 | 
  43 |     
  44 |      
  45 | 
  46 | }
```