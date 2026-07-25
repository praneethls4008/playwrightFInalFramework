import {Locator, Page} from '@playwright/test';
import { anchorEleType } from '../../types/commonElementTypes';
import { extractAnchorElementsData } from '../../helper/actions/getAnchorEleData';
import { getComputedStyle } from '../../helper/actions/getComputedStyles';

export class QAPlaygroundHeaderComponent{

    private readonly page: Page;
    private readonly headerLocator: Locator;
    private readonly bannerLocator: Locator;
    private readonly menuLocator: Locator;
    private readonly menuLinksLocator: Locator;
    private readonly loginBtnLocator: Locator;
    private readonly loginPageSignInLocator: Locator;
    private readonly darkModeBtnLocator: Locator;
    private readonly lightModeBtnLocator: Locator;
    
    private readonly fullPageLocator: Locator;

    constructor(page: Page){
        this.page = page;
        this.headerLocator = this.page.getByRole('navigation', { name: 'Main navigation' });
        this.bannerLocator = this.headerLocator.getByRole('link').first();
        this.menuLocator = this.headerLocator.getByRole('list');
        this.menuLinksLocator = this.menuLocator.getByRole('link');
        this.loginBtnLocator = this.headerLocator.getByRole('link', { name: 'Log in / Sign up' });
        this.darkModeBtnLocator = this.headerLocator.getByRole('button', { name: 'Switch to dark mode' });
        this.lightModeBtnLocator = this.headerLocator.getByRole('button', { name: 'Switch to light mode' });
        this.loginPageSignInLocator = this.page.getByTestId('sign-in-card');
        this.fullPageLocator = this.page.locator('html');
    }

    async getBannerText(): Promise<string>{
      return await this.bannerLocator.innerText();
    }

    async getBannerLink(): Promise<string>{
      const href = await this.bannerLocator.getAttribute('href');
      return href!==null ? href : '';
    }

    async getMenuLinks(): Promise<anchorEleType[]>{
      const menusItemsLocators = await this.menuLinksLocator.all();
      const menuListDataActual: anchorEleType[] = await extractAnchorElementsData(menusItemsLocators);

      return menuListDataActual;

    }

    async getLoginOrSignupBtnHref(): Promise<string>{
        const href = await this.loginBtnLocator.getAttribute('href');
        return href!==null ? href : '';
    }

    async clickDarkModeBtn(){
      await this.darkModeBtnLocator.click();
    }

    async clickLightModeBtn(){
      await this.lightModeBtnLocator.click({force:true});
    }

    async getPageBackgroundColor(){
      return await getComputedStyle(this.fullPageLocator, 'background-color');
    }

    


    
    


    
     

}