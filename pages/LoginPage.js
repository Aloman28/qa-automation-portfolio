const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;

    this.emailAddress = page.getByRole('textbox',{ name: 'Email Address'});
    this.password = page.getByRole('textbox',{ name: 'Password'});
    this.signInButton = page.getByRole('button', { name: 'Login' });
    this.accountHeading = page.getByRole('heading', { name: 'Account' });
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(emailAddress, password) {
    await this.emailAddress.fill(emailAddress);
    await this.password.fill(password);
    await this.signInButton.click();
    
  }

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL('/\/account/');
    await expect(this.accountHeading).toBeVisible();
  }
}

module.exports = LoginPage;