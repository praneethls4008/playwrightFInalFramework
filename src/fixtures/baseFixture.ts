import {test as base, Page, } from '@playwright/test'
import { Context } from 'node:vm';
import { HeaderComponent } from '../component/headerComponent';

type BaseFixture = {
    page: Page,
    context: Context

}

export const test = base.extend(
    {
        page: async({page}, use, testInfo)=>{
            await use(page);
        },

        context : async({context}, use ,testInfo)=>{
            await use(context);
        },

    }
);