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
  - waiting for getByRole('navigation', { name: 'Main navigation' }).getByRole('button', { name: 'Switch to light mode' })

```

# Test source

```ts
  1  | import {test, Locator, Page} from '@playwright/test';
  2  | import { anchorEleType } from '../../types/commonElementTypes';
  3  | import { HeaderDataType } from './HeaderComponent';
  4  | import { extractAnchorElementsData } from '../../helper/reuableActions/getAnchorEleData';
  5  | import { getComputedStyle } from '../../helper/reuableActions/getComputedStyles';
  6  | 
  7  | export class QAPlaygroundHeaderComponent{
  8  | 
  9  |     private readonly page: Page;
  10 |     private readonly headerLocator: Locator;
  11 |     private readonly bannerLocator: Locator;
  12 |     private readonly menuLocator: Locator;
  13 |     private readonly menuLinksLocator: Locator;
  14 |     private readonly loginBtnLocator: Locator;
  15 |     private readonly darkModeBtnLocator: Locator;
  16 |     private readonly lightModeBtnLocator: Locator;
  17 |     
  18 |     private readonly fullPageLocator: Locator;
  19 | 
  20 |     constructor(page: Page){
  21 |         this.page = page;
  22 |         this.headerLocator = this.page.getByRole('navigation', { name: 'Main navigation' });
  23 |         this.bannerLocator = this.headerLocator.getByRole('link').first();
  24 |         this.menuLocator = this.headerLocator.getByRole('list');
  25 |         this.menuLinksLocator = this.menuLocator.getByRole('link');
  26 |         this.loginBtnLocator = this.headerLocator.getByRole('link', { name: 'Log in / Sign up' });
  27 |         this.darkModeBtnLocator = this.headerLocator.getByRole('button', { name: 'Switch to dark mode' });
  28 |         this.lightModeBtnLocator = this.headerLocator.getByRole('button', { name: 'Switch to light mode' });
  29 | 
  30 |         this.fullPageLocator = this.page.locator('html');
  31 |     }
  32 | 
  33 |     async getBannerText(): Promise<string>{
  34 |       return await this.bannerLocator.innerText();
  35 |     }
  36 | 
  37 |     async getBannerLink(): Promise<string>{
  38 |       const href = await this.bannerLocator.getAttribute('href');
  39 |       return href!==null ? href : '';
  40 |     }
  41 | 
  42 |     async getMenuLinks(): Promise<anchorEleType[]>{
  43 |       const menusItemsLocators = await this.menuLinksLocator.all();
  44 |       const menuListDataActual: anchorEleType[] = await extractAnchorElementsData(menusItemsLocators);
  45 | 
  46 |       return menuListDataActual;
  47 | 
  48 |     }
  49 | 
  50 |     async clickLoginOrSignupBtn(){
> 51 |         console.log(await this.lightModeBtnLocator.getAttribute('href'));
     |                                                    ^ Error: locator.getAttribute: Test ended.
  52 |         await this.loginBtnLocator.click();
  53 |     }
  54 | 
  55 |     async clickDarkModeBtn(){
  56 |       await this.darkModeBtnLocator.click();
  57 |     }
  58 | 
  59 |     async clickLightModeBtn(){
  60 |       await this.lightModeBtnLocator.click();
  61 |     }
  62 | 
  63 |     async getPageBackgroundColor(){
  64 |       return await getComputedStyle(this.fullPageLocator, 'background-color');
  65 |     }
  66 | 
  67 |     
  68 | 
  69 | 
  70 |     
  71 |     
  72 | 
  73 | 
  74 |     
  75 |      
  76 | 
  77 | }
```