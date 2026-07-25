export type FooterDataType = {
    testName: string,
    type: 'ORGANIC' | 'LP',
    expected: Array<{text: string, href: string}>,
    errongMsg: string
};