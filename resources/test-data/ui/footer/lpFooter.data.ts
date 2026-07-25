import { FooterDataType } from "../../../types/footerType";

export const LPHeaderData:FooterDataType = {
    testName: 'LP Footer Validation',
    type: 'LP',
    expected: [
        {
            text: 'cash back', href: '/cashback'},
        {
            text: 'student chrome', href: '/studentchrome'
        }
    ],
    errongMsg: 'Footer Component miss match'
} as const;