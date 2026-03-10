import { test, expect } from '@playwright/test';

test('SUBSCRIBEEE', async ({ page }) => {
  await page.goto('https://automationexercise.com');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.fill('#susbscribe_email', 'automationtest123@email.com');
  await page.click('#subscribe');
  await expect(page.locator('text=You have been successfully subscribed!')).toBeVisible();
});