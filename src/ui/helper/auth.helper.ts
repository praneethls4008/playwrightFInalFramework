import { test as TEST, expect, Page, TestInfo } from '@playwright/test';
import {  UserRoleType } from '../types/auth.types';
import { getExecutionMetaData } from '../../shared/utilities/execution-metadata.utility';
import { env } from '../../../config/environment.config';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';


export function getStorageStateFileName(testInfo: TestInfo, userType: UserRoleType): string{
  const executionMetaData = getExecutionMetaData(testInfo);
  const fullFileName = `${userType}-shard_${executionMetaData.currentShard}-worker_${executionMetaData.parallelWorkerIndex}`;
  return `${env.STORAGE_STATE_ROOT_PATH}${fullFileName}`;
}




export async function createStorageState(testInstance: typeof TEST, page: Page, testInfo: TestInfo, userType: UserRoleType ){
    const loginPage = new LoginPage(page);                                                                                                                                                                                                                                                                                        
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.enterCredentials(testInstance, env.ADMIN_USERNAME, env.ADMIN_PASSWORD, true);
    await loginPage.clickLoginBtn();
    
    await expect(dashboardPage.getLogOutBtn()).toBeVisible({timeout: 10000});

    const fileName = getStorageStateFileName(testInfo, userType);
    await page.context().storageState({
      path: fileName,
    })
  }; 

  

