const { expect } = require('@playwright/test');
const loginPage = new LoginPage(page);
const productsPage = new ProductsPage(page);

await loginPage.goto();
await loginPage.login(userName, password);

await productsPage.verifyProductsPage();