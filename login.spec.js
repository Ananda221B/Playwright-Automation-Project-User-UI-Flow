import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';
import { LoginPage } from '../pages/loginPage.js';

test.describe('Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.goToLogin();
  });


  test('Login No email', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login('', 'password123');
    await expect(page.locator('input[data-qa="login-email"]')).toBeVisible();
  });

  
  test('Login No password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login('test@email.com', '');
    await expect(page.locator('input[data-qa="login-password"]')).toBeVisible();
  });


  test('Login Wrong email', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login('wrongmail@mail.com', '420CSE69');
    await login.verifyLoginError();
  });


  test('Login Wrong password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login('shahed221.bucc@gmail.com', 'passs123');
    await login.verifyLoginError();
  });
  
  
  test('Login VALID info', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login('shahed221.bucc@gmail.com', '420CSE69');
    await expect(page.locator('text=Logged in as')).toBeVisible();
  });

});