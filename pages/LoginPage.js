const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;

    this.userName = page.getByRole('textbox',{ name: 'Username'});
    this.password = page.getByRole('textbox',{ name: 'Password'});
    this.signInButton = page.getByRole('button', { name: 'Login' });
    this.productPage = page.locator('[data-test="secondary-header"]',{ name: 'Products' });
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(userName, password) {
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.signInButton.click();
    
  }

  async verifyProductsPage() {
    await expect(this.page).toHaveURL('/\/inventory.html/');
    await expect(this.productPage).toBeVisible();
  }
}

module.exports = LoginPage;