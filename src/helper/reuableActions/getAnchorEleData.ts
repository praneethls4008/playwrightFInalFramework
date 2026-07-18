import { Locator } from "@playwright/test";
import { anchorEleType } from "../../types/commonElementTypes";

  export async function extractAnchorElementsData(locators: Locator[]){
        const anchorElements: anchorEleType[] = [];
        for(const anchrorEle of locators){
            anchorElements.push({
                text: await anchrorEle.textContent(),
                href: await anchrorEle.getAttribute('href')
            });
        }
        return anchorElements;
    }