import { Page } from "@playwright/test";
import { PAGE, PageType } from "../../../../src/data/urls/aem.urls.data";
import { commonHeaderComponentTests } from "./commonHeaderComponentTests";
import { validateQAPlaygroundHeader } from "./playGroundHeaderComponentTests";


export async function validateHeader(page: Page, pageType: PageType, pageName: PAGE) {
  if (pageName === 'QA_PLAYGROUND') {
    await validateQAPlaygroundHeader(page, pageType, pageName);
  } else if (pageType === 'ORIGINAL') {
    //skip
  } else if (pageType === 'PLAYGROUND') {
    //skip
  } else {
    await commonHeaderComponentTests(page, pageType, pageName);
  }
};
