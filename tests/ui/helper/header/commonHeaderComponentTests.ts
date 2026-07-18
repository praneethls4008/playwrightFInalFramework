import { HeaderComponent, HeaderDataType } from "../../../../src/component/header/HeaderComponent";
import { test } from "../../../../src/fixtures/baseFixture";
import { expect, Page } from "@playwright/test";
import { PAGE, PageType } from "../../../../src/data/urls/aem.urls.data";
import { loadData } from "../../../../src/helper/test-data-helper/headerDataHelper";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function commonHeaderComponentTests(page: Page, pageType: PageType, pageName: PAGE){
  const headerComponent = new HeaderComponent(page);
  let headerDataActual: HeaderDataType;

  for (let subNavIndex = 0; subNavIndex < 3; subNavIndex++) {
    await test.step(`open subnav ${subNavIndex}`, async () => {
      await headerComponent.openSubnav(subNavIndex);
    });

    await test.step(`get subnav ${subNavIndex} anchor tags`, async () => {
      headerDataActual = await headerComponent.getAnchorElements();
    });

    const expectedData = loadData(pageType);

    await test.step(`validate subnav ${subNavIndex} anchro elements with expected data`, () => {
      expect(expectedData).toBeDefined();
      expect(headerDataActual).toMatchObject(expectedData);
    });
  }
};