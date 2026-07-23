import { HeaderDataType } from "./headerType";

export const GeneralHeaderData:HeaderDataType = {
    testName: 'General Header Validation',
    type: 'GENERAL',
    expected: [
        {
            text: 'QA Playground', href: '/'
        },
    ],
    errongMsg: 'Header Component miss match'
} as const;