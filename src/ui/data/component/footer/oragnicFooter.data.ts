import { FooterDataType } from "./footerType";

export const OrganicHeaderData:FooterDataType = {
    testName: 'Organic Footer Validation',
    type: 'ORGANIC',
    expected: [
        {
            text: 'cash back', href: '/cashback'},
        {
            text: 'student chrome', href: '/studentchrome'
        }
    ],
    errongMsg: 'Footer Component miss match'
} as const;