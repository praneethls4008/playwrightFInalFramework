import { Locator, Page } from "@playwright/test";

export class HomePage{
  private readonly page: Page;

  private readonly mainHeader: Locator;
  private readonly subHeader: Locator;

  constructor(page: Page){
    this.page = page;
    
    this.subHeader = this.page.locator('#entry_217831');
    this.mainHeader = this.page.locator('#main-header');

  }


  goto(){
    //goto
  }

  getPage(){
    return this.page;
  }

  getMainHeader(){
    return this.mainHeader;
  }

  getSubHeader(){
    return this.subHeader;
  }
}