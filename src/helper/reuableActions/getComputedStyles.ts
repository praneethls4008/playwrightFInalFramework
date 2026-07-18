import { Locator } from "@playwright/test";

export async function getComputedStyle(locator: Locator, property: string): Promise<CSSStyleDeclaration> {
    const computerStyleValue = await locator.evaluate(
      (locator) => {
        return window.getComputedStyle(locator, property);
      }
    )
    return computerStyleValue;
  }