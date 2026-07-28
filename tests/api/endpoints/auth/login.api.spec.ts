import { expect } from "@playwright/test";
import { test } from "../../../../src/api/fixtures/api.fixture";
import { authSchemaValidation, profileSchemaValidation } from "../../../../src/api/validators/product/auth.validator";


test.describe(
  'Auth Tests',
  () => {


     test(
      'login and check if token valid',
      async({authApi}) => {

        const email = 'john@mail.com';
        const password = 'changeme';
        let accessToken: string;
      
        await test.step(
          'Step1: login with username & password',
          async () => {
            const response = await authApi.login(email, password);
            expect(response.status()).toBe(201);
            const responseBody: unknown = await response.json();

            authSchemaValidation(responseBody);
            accessToken = responseBody.access_token;
          }
        );

        await test.step(
          'Step2: Use access token',
          async () => {
            const response = await authApi.profile(accessToken);
            expect(response.status()).toBe(200);
            const responseBody:unknown = await response.json();
            profileSchemaValidation(responseBody);
            expect(responseBody.email).toBe(email);
            expect(responseBody.password).toBe(password);
          }
        );
      

        

        

      }
    ); 

  }
)