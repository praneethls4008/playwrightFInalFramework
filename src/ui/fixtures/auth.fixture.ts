import { test as base, Page} from '@playwright/test'
import { createStorageState, getStorageStateFileName } from '../helper/auth.helper';
import * as fs from 'fs';
import { getExecutionMetaData } from '../../shared/utilities/execution-metadata.utility';

type ExpiryState = {
  time: number;
};

type TestFixtures = {
  userPage: Page;
  adminPage: Page;
};

type WorkerFixtures = {
  userAuthExpiry: ExpiryState;
  adminAuthExpiry: ExpiryState;
};

export const test = base.extend<TestFixtures, WorkerFixtures>({

    // eslint-disable-next-line no-empty-pattern
    userAuthExpiry: [async({}, use) => {
      await use({ time: 0});
    }, {scope: 'worker'}],

    // eslint-disable-next-line no-empty-pattern
    adminAuthExpiry: [async({}, use) => {
      await use({ time: 0});
    }, {scope: 'worker'}],

    // 1. Inject playwrightOptions alongside browser
    userPage: [async({ userAuthExpiry, browser }, use, testInfo) => {
      const currTime = Date.now();
      const fileName = getStorageStateFileName(testInfo, 'USER');
      const executionMetaData = getExecutionMetaData(testInfo);
      let context;

      if (currTime > userAuthExpiry.time || !fs.existsSync(fileName)) {
        // Pass project config options when logging in for the first time
        context = await browser.newContext();
        const loginPage = await context.newPage();
        
        await createStorageState(loginPage, testInfo, 'USER');
        userAuthExpiry.time = currTime + (10 * 60 * 1000);
        console.log(`[Shard ${executionMetaData.currentShard}/${executionMetaData.totalShards} Worker ${testInfo.workerIndex}] USER login refreshed.`);
        
        await use(loginPage);
      } else {
        console.log(`[Shard ${executionMetaData.currentShard}/${executionMetaData.totalShards} [Worker ${testInfo.workerIndex}] USER token is valid. Reusing cached storage state.`);
        
        // Pass project config options AND include the cached storageState file
        context = await browser.newContext({storageState: fileName});
        const targetPage = await context.newPage();
        
        await use(targetPage);
      }

      await context.close();
    }, {scope: 'test'}],


    adminPage: [async({ adminAuthExpiry, browser }, use, testInfo) => {
      const currTime = Date.now();
      const fileName = getStorageStateFileName(testInfo, 'ADMIN');
      const executionMetaData = getExecutionMetaData(testInfo);
      let context;

      if (currTime > adminAuthExpiry.time || !fs.existsSync(fileName)) {
        // Pass project config options when logging in for the first time
        context = await browser.newContext({});
        const loginPage = await context.newPage();
        
        await createStorageState(loginPage, testInfo, 'ADMIN');
        adminAuthExpiry.time = currTime + (29 * 24 * 60 * 60 * 1000);
        console.log(`[Shard ${executionMetaData.currentShard}/${executionMetaData.totalShards} Worker ${testInfo.workerIndex}] ADMIN login refreshed.`);
        
        await use(loginPage);
      } else {
        console.log(`[Shard ${executionMetaData.currentShard}/${executionMetaData.totalShards} [Worker ${testInfo.workerIndex}] ADMIN token is valid. Reusing cached storage state.`);
        
        // Pass project config options AND include the cached storageState file
        context = await browser.newContext({storageState: fileName});
        const targetPage = await context.newPage();
        
        await use(targetPage);
      }

      await context.close();
    }, {scope: 'test'}],
  }
);