export type PAGE = |
    'QA_PLAYGROUND' |
    'FAKE_STORE' |
    'LAMBDATEST_ECOMMERCE' |
    'QA_PLAYGROUND_BANK' |
    'DEMO_QA' |
    'AMAZON' |
    'FLIPKART' |
    'SKY_SCANNER';

type QueryParametersType = Record<string, string>;



export type PageType = 'ORIGINAL' | 'PLAYGROUND';

export type URL_CONFIG = {
    path: string,
    pageType: PageType,
    params: QueryParametersType
};


export const URLS: Record<PAGE, URL_CONFIG> = {
    QA_PLAYGROUND: {
        path: 'https://qaplayground.com/',
        pageType: 'PLAYGROUND',
        params: {
        }
    },
    QA_PLAYGROUND_BANK: {
        path: 'https://qaplayground.com/bank/login',
        pageType: 'PLAYGROUND',
        params: {}
    },
    FAKE_STORE: {
        path: 'https://letcode.in/home',
        pageType: 'PLAYGROUND',
        params: {}
    },
    LAMBDATEST_ECOMMERCE: {
        path: 'https://ecommerce-playground.lambdatest.io/',
        pageType: 'PLAYGROUND',
        params: {}
    },
    FLIPKART: {
        path: 'https://www.flipkart.com/',
        pageType: 'ORIGINAL',
        params: {
        }
    },
    DEMO_QA: {
        path: 'https://demoqa.com/',
        pageType: 'PLAYGROUND',
        params: {}
    },
    AMAZON: {
        path: 'https://www.amazon.in/',
        pageType: 'ORIGINAL',
        params: {
        }
    },
    SKY_SCANNER: {
        path: 'https://www.skyscanner.co.in/',
        pageType: 'ORIGINAL',
        params: {}
    },

} as const;