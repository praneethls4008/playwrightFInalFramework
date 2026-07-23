import { test } from "@playwright/test";
import { validateHeader } from "../helper/header/headerComponentTests";
import { PAGE } from "../../../src/ui/data/urls/aem.urls.data"
import { getUrlsToRun } from "../../../src/ui/helper/getUrlsToRun";
import { getFullUrl, getPageType } from "../../../src/ui/helper/urlResolver";


const PAGES_NAMES:Array<PAGE> = getUrlsToRun();

for(const pageName of PAGES_NAMES){
    const fullUrl = getFullUrl(pageName);
    const pageType = getPageType(pageName);

    // eslint-disable-next-line playwright/expect-expect
    test(`${pageName} Header`,
        { tag: ['@Header'] },
        async({page})=>{
        await page.goto(fullUrl);
        await page.waitForLoadState('load');
        await validateHeader(page, pageType, pageName);
    })
}
