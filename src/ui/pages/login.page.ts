import { test, Page, Locator } from "@playwright/test";
import { getFullUrl } from "../helper/urlResolver";
import { env } from "../../../config/environment.config";
import { decryptText } from "../../shared/utilities/crypto/crypto-service.utility";

export class LoginPage {
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly submitBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = this.page.getByTestId('login-username-input');
    this.passwordInput = this.page.getByTestId('login-password-input');
    this.submitBtn = this.page.getByTestId('login-submit-btn');
  }


  async goto() {
    const url = getFullUrl('QA_PLAYGROUND_BANK') + 'login';
    await this.page.goto(url, { waitUntil: 'load' });
  }

  async enterCredentials(testRunner: typeof test, username: string, password: string, isEncrypted: boolean = false) {
    await testRunner.step('Fill login credentials', async () => {
      const resolvedUsername = isEncrypted ? decryptText(username, env.CRYPTO_SECRET_KEY) : username;
      const resolvedPassword = isEncrypted ? decryptText(password, env.CRYPTO_SECRET_KEY) : password;

      await this.setSensitiveInput(this.usernameInput, resolvedUsername);
      await this.setSensitiveInput(this.passwordInput, resolvedPassword);
    });
  }

  private async setSensitiveInput(locator: Locator, value: string): Promise<void> {
    await locator.evaluate((element, inputValue) => {
      if (!(element instanceof HTMLInputElement)) {
        throw new Error('Sensitive input locator must resolve to an input element');
      }

      const valueDescriptor = Object.getOwnPropertyDescriptor(
        HTMLInputElement.prototype,
        'value',
      );

      if (!valueDescriptor?.set) {
        throw new Error('Unable to resolve the native input value setter');
      }

      element.focus();
      valueDescriptor.set.call(element, inputValue);
      element.dispatchEvent(new Event('input', { bubbles: true }));
      element.dispatchEvent(new Event('change', { bubbles: true }));
    }, value);
  }

  async clickLoginBtn() {
    await this.submitBtn.click();
  }


}
