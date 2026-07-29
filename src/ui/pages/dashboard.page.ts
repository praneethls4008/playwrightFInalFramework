import { Locator, Page } from "@playwright/test";

export class DashboardPage{
  private readonly page;

  private readonly logoutBtn;

  constructor(page: Page){
    this.page = page;
    
    this.logoutBtn = this.page.getByRole('button', {name: 'Logout',});
  }


  goto(){
    //goto
  }

  getLogOutBtn(): Locator{
    return this.logoutBtn;
  }
}