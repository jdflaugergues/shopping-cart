import { Product } from '../../products/shared/product.model';
import { ProductService } from '../../products/shared/product.service';
import { ShoppingCartProduct } from './shopping-cart-product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {

  constructor(private productService: ProductService) {}

  // Get the shopping cart from the localStorage.
  getShoppingCart(): Promise<ShoppingCartProduct[]> {

    return new Promise<ShoppingCartProduct[]>(resolve => {
      let shoppingCart: ShoppingCartProduct[] = [];
      let lsShoppingCart = JSON.parse(localStorage.getItem('shopping-cart')) || [];

      if (!lsShoppingCart.length)
        return resolve(shoppingCart);

      // Id of products in local storage
      let listProductId = lsShoppingCart.map((item: any) => item.id);

      this.productService.getProductsFromId(listProductId).then(products => {

        lsShoppingCart.forEach((shoppingCartProduct: any) => {
          let product = products.find(product => product['id'] === shoppingCartProduct.id)
          shoppingCart.push(new ShoppingCartProduct(product, shoppingCartProduct.quantity));
        });

        return resolve(shoppingCart);
      });
    })
  }

  // Add a product to the shopping cart and save into the localStorage
  // If there already is a the product in the shopping cart, increment the quantity
  addShoppingCartProduct(product: Product): void {

    let lsShoppingCart = JSON.parse(localStorage.getItem('shopping-cart')) || [];
    let shoppingCartProduct: ShoppingCartProduct = lsShoppingCart.find((shoppingCartProduct: any) => shoppingCartProduct.id === product.id);

    if (!shoppingCartProduct) {
      lsShoppingCart.push({id: product.id, quantity: 1});
    } else {
      shoppingCartProduct.quantity++;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(lsShoppingCart));
  }

  // Save the shopping cart into the localstorage (only id with quantity)
  saveShoppingCart(shoppingCart: ShoppingCartProduct[]): void {

    let lsShoppingCart = shoppingCart.map((shoppingCartProduct: ShoppingCartProduct) => {
      return {id: shoppingCartProduct.product.id, quantity: shoppingCartProduct.quantity};
    });

    localStorage.setItem('shopping-cart', JSON.stringify(lsShoppingCart));
  }
}
