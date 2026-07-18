export const QAPlaygroundHeaderData = {
    testName: 'QA Playgroud Header Validation',
    type: 'QA_PLAYGROUND',
    banner:{
        text: 'QA Playground',
        href: '/'
    },
    loginBtnHref: '/auth/sign-in',
    switchToDarkMode: `'rgb(10, 12, 16)'`,
    switchToLightMode: `'rgb(244, 248, 251)'`,
    menuItems: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Practice',
            href: '/practice'
        },
        {
            text: 'Demo Apps',
            href: '/demo'
        },
        {
            text: 'Challenges',
            href: '/challenges'
        },
        {
            text: 'Blogs',
            href: '/blog'
        },
    ],
} as const;