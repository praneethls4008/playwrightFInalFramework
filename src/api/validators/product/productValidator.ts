import { expect } from "@playwright/test";
import { ProductSchema, ProductType } from "../../schemas/product/product.schema";
import { getDetailedErrorMessage } from "../../helpers/zod.helper";

export function productValidator(product: unknown, msg = ""): asserts product is ProductType {
  const result = ProductSchema.safeParse(product);

  if (!result.success) {
    const detailedMessage = getDetailedErrorMessage(result.error, msg);
    expect(result.success, detailedMessage).toBe(true);
    throw new Error(detailedMessage)
  } else {
    expect(result.success, 'product schema validation').toBe(true);
  }
}

export function productArrayValidator(products: unknown): asserts products is Array<ProductType>{
  expect(Array.isArray(products), 'products should an array');
  if(Array.isArray(products)){
    products.forEach((product, index) => {
      productValidator(product, `product[${index}]: `);
    });
  }
  
}


