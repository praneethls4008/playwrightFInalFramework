import { expect, Page, test, TestInfo  } from "@playwright/test";
import { normalizeError } from "../../../src/helper/errorResolver";
import * as allure from "allure-js-commons";

export async function runComponentStep(
  componentName: string,
  page: Page,
  testInfo: TestInfo,
  validationFunction: () => Promise<void>,
) {

  try{
      await test.step(componentName, async() => {
      await validationFunction();
    });
  } catch (error: unknown) {
      const componentError = normalizeError(error);

      /*
     * Attach complete stack trace to Allure.
     */
      await allure.attachment(
        `${componentName} - Exception Stack Trace`,
        componentError.stack ?? componentError.message,
        "text/plain",
      );

      testInfo.annotations.push({
      type: "component-failure",
      description:
        `${componentName}: ${componentError.message}`,
      });

      expect.soft(
        false,
        `${componentName} validation failed: ${componentError.message}`
      ).toBe(true);

      
  }


}