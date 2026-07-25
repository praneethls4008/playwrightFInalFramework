import { HeaderDataType } from "../../../../tests/ui/types/headerType";

export const OrganicHeaderData:HeaderDataType = {
    testName: 'Organic Header Validation',
    type: 'ORGANIC',
    expected: [
        {
            text: 'cash back', href: '/cashback'},
        {
            text: 'student chrome', href: '/studentchrome'
        }
    ],
    errongMsg: 'Header Component miss match'
} as const;