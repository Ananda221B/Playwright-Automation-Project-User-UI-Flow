export class HomePage {

  constructor(page) {
    this.page = page;
    this.loginLink = 'a[href="/login"]';
    this.productsLink = 'a[href="/products"]';
  }

  async navigate() {
    await this.page.goto('https://automationexercise.com');
  }

  async goToLogin() {
    await this.page.click(this.loginLink);
  }

  async goToProducts() {
    await this.page.click(this.productsLink);
  }

}