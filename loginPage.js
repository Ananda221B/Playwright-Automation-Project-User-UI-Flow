import { expect } from '@playwright/test';

export class LoginPage {

  constructor(page) {
    this.page = page;
    this.emailInput = 'input[data-qa="login-email"]';
    this.passwordInput = 'input[data-qa="login-password"]';
    this.loginButton = 'button[data-qa="login-button"]';
    this.errorMessage = 'text=Your email or password is incorrect!';
  }

  async login(email, password) {

    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);

    await this.page.click(this.loginButton);
  }

  async verifyLoginError() {
    await expect(this.page.locator(this.errorMessage)).toBeVisible();
  }

}