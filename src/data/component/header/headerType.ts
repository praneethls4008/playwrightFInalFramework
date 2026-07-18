export type HeaderDataType = {
    testName: string,
    type: 'ORGANIC' | 'LP' | 'GENERAL' | 'QA_PLAYGROUND',
    expected: Array<{text: string, href: string}>,
    errongMsg: string
};