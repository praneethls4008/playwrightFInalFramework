import { test, APIRequestContext, APIResponse, TestInfo } from "@playwright/test";

export class Products{

  private readonly request: APIRequestContext;
  private readonly testInfo: TestInfo;

  private static readonly productBasePath = 'products'
  private static readonly getOneProductPath = Products.productBasePath + "/";

  constructor(request: APIRequestContext, testInfo: TestInfo){
    this.request = request;
    this.testInfo = testInfo;
  }


  async getAllProducts(limit?: number, offset?: number): Promise<APIResponse>{
    const params: Record<string, string | number | boolean> = {};
    if(limit !== undefined) params.limit = limit;
    if(offset !== undefined) params.offset = offset;
    
    return this.request.get(Products.productBasePath, { params });
  }

  async getProduct(id: number): Promise<APIResponse>{
      const path = Products.getOneProductPath + id;  
     return await test.step(`GET ${path}` , async() => {
        return this.request.get(path);
      });
  }
}