import { HeaderDataType } from "../../../../src/ui/types/headerType";
import { PageType } from "../../../../src/ui/constants/urls/aem.data";
import { OrganicHeaderData } from "../../../../resources/test-data/ui/header/oragnicHeader.data";
import { LPHeaderData } from "../../../../resources/test-data/ui/header/lpHeader.data";

export function loadData(pageType: PageType): HeaderDataType {
  if (pageType === "ORIGINAL") {
    return OrganicHeaderData;
  } return LPHeaderData;
};
