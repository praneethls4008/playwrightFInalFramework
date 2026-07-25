import { expect, Page, TestInfo } from '@playwright/test';
import {  UserRoleType } from '../types/auth.types';
import { getFullUrl } from './urlResolver';
import { getAuthCredentials } from '../../../resources/test-data/ui/auth/user-auth.data';
import { getExecutionMetaData } from '../../shared/utilities/execution-metadata.utility';
import { env } from '../../../config/environment.config';


export function getStorageStateFileName(testInfo: TestInfo, userType: UserRoleType): string{
  const executionMetaData = getExecutionMetaData(testInfo);
  const fullFileName = `${userType}-shard_${executionMetaData.currentShard}-worker_${executionMetaData.parallelWorkerIndex}`;
  return `${env.STORAGE_STATE_ROOT_PATH}${fullFileName}`;
}




export async function createStorageState(page: Page, testInfo: TestInfo, userType: UserRoleType ){
    const url = getFullUrl('QA_PLAYGROUND_BANK')+'login';
    console.log(`banl login: ${url}`);
    const user = getAuthCredentials(userType);
    
    await page.goto(url);
    

    await  page.getByTestId('login-username-input').fill(user.username);
    await page.getByTestId('login-password-input').fill(user.password);

    await page.getByTestId('login-submit-btn').click();

    await expect(page.getByRole('button', {name: 'Logout'})).toBeEnabled();

    const fileName = getStorageStateFileName(testInfo, userType);
    await page.context().storageState({
      path: fileName,
    })
  }; 

  

