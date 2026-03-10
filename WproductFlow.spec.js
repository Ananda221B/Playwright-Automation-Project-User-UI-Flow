import { test, expect } from '@playwright/test';

test('Search and ADD', async ({ page }) => {

  await page.goto('https://automationexercise.com');
  await page.click('a[href="/products"]');
  await expect(page.locator('text=All Products')).toBeVisible();
  await page.fill('#search_product', 'Tshirt');
  await page.click('#submit_search');
  await expect(page.locator('text=Searched Products')).toBeVisible();
  await page.evaluate(() => window.scrollBy(0, 800));
  const product = page.locator('text=Pure Cotton Neon Green Tshirt');
  const viewProduct = product.locator('xpath=../../..').locator('text=View Product');
  await viewProduct.click();
  await expect(page.locator('text=Pure Cotton Neon Green Tshirt')).toBeVisible();
  await page.click('button:has-text("Add to cart")');
  await expect(page.locator('text=Added!')).toBeVisible();

});