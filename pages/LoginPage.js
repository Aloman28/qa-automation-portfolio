const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;

    this.userName = page.getByRole('textbox',{ name: 'Username'});
    this.password = page.getByRole('textbox',{ name: 'Password'});
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.productPage = page.locator('[data-test="secondary-header"]',{ name: 'Products' });
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(userName, password) {
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.loginButton.click();
    
  }

   async expectLoginError(expectedMessage) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(expectedMessage);
  }
}
 
module.exports = { LoginPage };
 