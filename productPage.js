import { expect } from '@playwright/test';

export class ProductPage {

  constructor(page) {
    this.page = page;
    this.productTitle = 'text=All Products';
    this.firstProduct = '.product-overlay a[data-product-id="1"]';
    this.modal = '#cartModal';
  }

  async verifyProductsPage() {
    await expect(this.page.locator(this.productTitle)).toBeVisible();
  }

  async addFirstProductToCart() {

    await this.page.hover('.product-image-wrapper:first-child');

    await this.page.click(this.firstProduct);

    await this.page.waitForSelector(this.modal);

  }

}