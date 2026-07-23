import test, { expect, Page } from "@playwright/test";
import { PAGE, PageType } from "../../../../src/ui/data/urls/aem.urls.data";
import { QAPlaygroundHeaderComponent } from "../../../../src/ui/component/header/QAPlaygroundHeaderComponent";
import { QAPlaygroundHeaderData } from "../../../../src/ui/data/component/header/qaPlaygroundHeader.data";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function validateQAPlaygroundHeader(page: Page, pageType: PageType, pageName: PAGE) {
    const headerComponent = new QAPlaygroundHeaderComponent(page);

    await test.step('Banner Validation',
      async() => {
        const actualBannerText = await headerComponent.getBannerText();
        expect.soft(actualBannerText, 'Banner text check').toBe(QAPlaygroundHeaderData.banner.text);

        const actualBannerLink = await headerComponent.getBannerLink();
        expect.soft(actualBannerLink, 'Banner href check').toBe((QAPlaygroundHeaderData.banner.href));
      }
    )


    await test.step('Menu validation',
      async() => {
        const actualMenusItems = await headerComponent.getMenuLinks();
        expect.soft(actualMenusItems, 'Menu Items Href and Text check').toEqual(QAPlaygroundHeaderData.menuItems);

      }
    )


    await test.step('login btn validation',
      async() => {
        
        const actualLoginBtnHref = await headerComponent.getLoginOrSignupBtnHref();
        expect.soft(actualLoginBtnHref, 'Login btn Href Check').toBe(QAPlaygroundHeaderData.loginBtnHref);
        
      }
    )
}
