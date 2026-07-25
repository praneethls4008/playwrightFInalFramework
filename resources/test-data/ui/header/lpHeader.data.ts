import { HeaderDataType } from "../../../../tests/ui/types/headerType";

export const LPHeaderData:HeaderDataType = {
    testName: 'LP Header Validation',
    type: 'LP',
    expected: [
        {
            text: 'cash back', href: '/cashback'},
        {
            text: 'student chrome', href: '/studentchrome'
        }
    ],
    errongMsg: 'Header Component miss match'
} as const;