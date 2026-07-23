import { HeaderDataType } from "../../data/component/header/headerType";
import { PageType } from "../../data/urls/aem.urls.data";
import { OrganicHeaderData } from "../../data/component/footer/oragnicFooter.data";
import { LPHeaderData } from "../../data/component/footer/lpFooter.data";

export function loadData(pageType: PageType): HeaderDataType {
  if (pageType === "ORIGINAL") {
    return OrganicHeaderData;
  } return LPHeaderData;
};
