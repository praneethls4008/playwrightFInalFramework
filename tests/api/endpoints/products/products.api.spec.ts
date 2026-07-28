import { test } from "../../../../src/api/fixtures/authenticated-api.fixture";
import { expect } from "@playwright/test";
import { productArrayValidator, productValidator } from "../../../../src/api/validators/product/productValidator";

test.describe(
  'Product api tets',
  () => {

    test(
      'getProductById',
      async({ productApi }) => {
        const id = 10;

        const response = await productApi.getProduct(id);
        expect(response.status(), 'Status 200 Check').toBe(200);
        const responseBody: unknown = await response.json();
        productValidator(responseBody);
        expect(responseBody.id).toBe(id);
      
      }
    );


    test(
      'getProducts',
      async({ productApi }) => {
        const limit = 5;
        const offset = 2;

        const response = await productApi.getAllProducts(limit, offset);
        expect(response.status(), 'Status 200 Check').toBe(200);
        // const responseBody =  (await response.json()) as ProductType;
        const responseBody: unknown = await response.json();
        productArrayValidator(responseBody);
        //limit is 5, so array shoudl have 5 elements
        expect(responseBody).toHaveLength(limit);
        //offset is 2, first id should be 1
        expect(responseBody[0].id).toBe(3);
      
      }
    );

  }
);