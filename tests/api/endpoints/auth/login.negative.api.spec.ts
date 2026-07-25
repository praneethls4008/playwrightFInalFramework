import { expect } from "@playwright/test";
import { test } from "../../../../src/api/fixtures/api.fixture";


test.describe(
  'Auth Tests',
  () => {

     test(
      'login with wrong password',
      async({authApi}) => {

        const email = 'john@mail.com';
        const password = 'wrong';

        const response = await authApi.login(email, password);
        expect(response.status()).toBe(401);
        const responseBody = (await response.json()) as { message: string, statusCode: number } ;
        console.log(responseBody);
        expect(responseBody.message).toBe('Unauthorized');


      }
    ); 

  }
)