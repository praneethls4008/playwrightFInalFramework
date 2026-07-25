import { test as Base, request , TestInfo } from '@playwright/test';
import { Products } from '../endpoints/products.api';
import { env } from '../../../config/environment.config';

type NoAuthFixtureType = {
  productApi: Products;
};

export const test = Base.extend<NoAuthFixtureType>({
  // eslint-disable-next-line no-empty-pattern
  productApi: async ({}, use, testInfo: TestInfo) => {

    const context = await request.newContext(
      {
        baseURL: env.API_BASE_URL,
        extraHTTPHeaders: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      }
    );
    await use(new Products(context, testInfo));
  },
});

