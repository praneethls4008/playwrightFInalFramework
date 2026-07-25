import {Locator, Page} from '@playwright/test';
import { anchorEleType } from '../../../../tests/ui/types/commonElementTypes';

export type HeaderDataType = Array<anchorEleType>;

export class HeaderComponent{

    private readonly page: Page;
    private readonly headerLocator: Locator;
    private readonly subNavLocator: Locator;
    private readonly subNavAnchorLocator: Locator;

    constructor(page: Page){
        this.page = page;
        this.headerLocator = this.page.getByTestId('header');
        this.subNavLocator = this.headerLocator.locator('//btn[@class="arrow"]');
        this.subNavAnchorLocator = this.subNavLocator.getByRole('listitem');
    }

    async openSubnav(subnavIndex: number){
        await this.subNavLocator.nth(subnavIndex).click({timeout: 1000});
    }

    async getAnchorElements(){
        const anchorElements: HeaderDataType = [];
        for(const anchrorEle of await this.subNavAnchorLocator.all()){
            anchorElements.push({
                text: await anchrorEle.textContent(),
                href: await anchrorEle.getAttribute('href')
            });
        }
        return anchorElements; 
    }

    
    


    
     

}