import { PAGE, URLS } from "../constants/urls/aem.data";
import { RUN_ALL, URLS_TO_RUN } from "../../../run_these_urls";

export const getUrlsToRun = (): Array<PAGE> => {
    if(RUN_ALL === true){
        return Object.keys(URLS) as Array<PAGE>;
    }
    
    return URLS_TO_RUN;
}