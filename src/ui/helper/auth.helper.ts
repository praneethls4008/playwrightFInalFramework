import test, { expect, Page, TestInfo } from '@playwright/test';
import {  UserRoleType } from '../types/auth.types';
import { getFullUrl } from './urlResolver';
import { getExecutionMetaData } from '../../shared/utilities/execution-metadata.utility';
import { env } from '../../../config/environment.config';


export function getStorageStateFileName(testInfo: TestInfo, userType: UserRoleType): string{
  const executionMetaData = getExecutionMetaData(testInfo);
  const fullFileName = `${userType}-shard_${executionMetaData.currentShard}-worker_${executionMetaData.parallelWorkerIndex}`;
  return `${env.STORAGE_STATE_ROOT_PATH}${fullFileName}`;
}




export async function createStorageState(page: Page, testInfo: TestInfo, userType: UserRoleType ){
    const url = getFullUrl('QA_PLAYGROUND_BANK')+'login';
    
    await page.goto(url);
    

    await test.step('Fill sensitive input: Username field', async () => {
      await  page.getByTestId('login-username-input').fill(env.ADMIN_USERNAME);
    });

    await test.step('Fill sensitive input: Password field', async () => {
      await page.getByTestId('login-password-input').fill(env.ADMIN_PASSWORD);
    });


    await page.getByTestId('login-submit-btn').click();

    await expect(page.getByRole('button', {name: 'Logout',})).toBeVisible({timeout: 10000});

    const fileName = getStorageStateFileName(testInfo, userType);
    await page.context().storageState({
      path: fileName,
    })
  }; 

  

