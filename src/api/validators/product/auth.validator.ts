import { expect } from "@playwright/test";
import { AuthSchema, AuthType, ProfileSchema, ProfileType } from "../../schemas/auth/auth.schema";
import { getDetailedErrorMessage } from "../../helpers/zod.helper";

export function authSchemaValidation(response: unknown): asserts response is AuthType{
  const result = AuthSchema.safeParse(response);
  if(!result.success){
    expect(result.success, getDetailedErrorMessage(result.error)).toBeTruthy();
  }else{
    expect(result.success, 'auth response schema check').toBeTruthy();
  }
}

export function profileSchemaValidation(response: unknown): asserts response is ProfileType{
  const result = ProfileSchema.safeParse(response);
  if(!result.success){
    expect(result.success, getDetailedErrorMessage(result.error)).toBeTruthy();
  }else{
    expect(result.success, 'profile response schema check').toBeTruthy();
  }
}