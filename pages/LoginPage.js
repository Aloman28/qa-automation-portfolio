class LoginPage {
  constructor(page) {
    this.page = page;

    this.emailAddress = page.getByRole('textbox',{ name: 'Email Address'});
    this.password = page.getByRole('textbox',{ name: 'Password'});
    this.signInButton = page.getByRole('button', { name: /sign in/i });
    this.accountHeading = page.getByRole('heading', { name: /my account/i });
  }

  async goto() {
    await this.page.goto('https://sauce-demo.myshopify.com/account/login');
  }

  async login(emailAddress, password) {
    await this.emailAddress.fill(emailAddress);
    await this.password.fill(password);
    await this.signInButton.click();
  }
}

module.exports = LoginPage;