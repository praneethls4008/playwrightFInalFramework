import { Locator, Page } from "@playwright/test";

export class DashboardPage{
  private readonly page: Page;

  private readonly logoutBtn: Locator;
  private readonly mainSidebar: Locator;
  private readonly quickActionsSection: Locator;

  constructor(page: Page){
    this.page = page;
    
    this.mainSidebar = this.page.getByTestId('bank-sidebar');
    this.quickActionsSection = this.page.getByTestId('quick-actions-section')
    this.logoutBtn = this.page.getByRole('button', {name: 'Logout',});

  }


  goto(){
    //goto
  }

  getPage(){
    return this.page;
  }

  getQuickActionsSection(){
    return this.quickActionsSection;
  }

  getMainSidebar(){
    return this.mainSidebar;
  }

  getLogOutBtn(): Locator{
    return this.logoutBtn;
  }
}