import { PAGE, URLS, URL_CONFIG } from "../data/urls/aem.urls.data";

export const getFullUrl = (pageName: PAGE)=>{
    let fullUrl = getFullPath(pageName)

    const queryParams = getParams(pageName);
    
    let index:number = 0;

    for(const [paramName, paramValue] of Object.entries(queryParams)){
        if(index>0){
            fullUrl = `${fullUrl}&`;
        }else{
            fullUrl = `${fullUrl}\?`;
        }
        fullUrl = `${fullUrl}${paramName}=${paramValue}`;
        index++;
    }
    return fullUrl;
};

export const getPageType = (pageName: PAGE)=>{
    return URLS[pageName].pageType;
};

export const getParams = (pageName: PAGE)=>{
    return URLS[pageName].params;
};

export const getFullPath = (pageName: PAGE)=>{
    return URLS[pageName].path;
};






