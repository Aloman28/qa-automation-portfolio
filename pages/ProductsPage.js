const { expect } = require('@playwright/test');

class ProductsPage {
  constructor(page) {
    this.page = page;

    this.pageTitle = page.locator(".title",{ name: 'Products'});
    this.inventoryItems = page.locator(".inventory_item");
    this.inventoryItemImages = page.locator(".inventory_item_img");
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.cartIcon = page.locator(".shopping_cart_link");
    this.addToCartButton = page.locator("button[id^='add-to-cart']");
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');

  }

  async expectOnProductsPage() {
    await expect(this.pageTitle).toHaveText('Products');
  }
 
  async addToCartByName(productName) {
    const item = this.inventoryItems.filter({ hasText: productName });
    await item.getByRole('button', { name: 'Add to cart' }).click();
  }

  async getCartCount() {
    // Saucedemo doesn't render the badge at all when the cart is empty,
    // so check it exists before reading its text.
    if ((await this.cartBadge.count()) === 0) {
      return 0;
    }
    return Number(await this.cartBadge.textContent());
  }
   async goToCart() {
    await this.cartIcon.click();
  }

}
 
module.exports = { ProductsPage };
 