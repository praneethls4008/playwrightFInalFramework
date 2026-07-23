import {test as Base, request} from '@playwright/test'
import { Auth } from '../endpoints/auth.api';


type AuthFixtureType = {
  authApi: Auth
}
export const test = Base.extend<AuthFixtureType>({
  // eslint-disable-next-line no-empty-pattern
  authApi: async ({}, use) => {
    const apiRequestContext = await request.newContext({
      baseURL: process.env.API_BASE_URL
    });
    await use(new Auth(apiRequestContext));
  }
});