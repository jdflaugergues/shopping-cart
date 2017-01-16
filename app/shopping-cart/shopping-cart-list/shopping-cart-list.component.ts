import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';

import { ShoppingCartService } from '../shared/shopping-cart.service';
import { ShoppingCartProduct } from '../shared/shopping-cart-product.model';
import { Product }             from '../../products/shared/product.model';

@Component({
  templateUrl: 'app/shopping-cart/shopping-cart-list/shopping-cart-list.component.html',
  styleUrls: ['app/shopping-cart/shopping-cart-list/shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {

  shoppingCart: ShoppingCartProduct[] = [];
  nbItems: number = 0;
  total: string = '';

  constructor(
    private shoppingCartService: ShoppingCartService,
    private location: Location
  ) {}

  // Fetch the shopping cart from the localstorage
  getShoppingCart(): void {
    this.shoppingCartService.getShoppingCart().then(shoppingCart => {

      this.shoppingCart = shoppingCart;
      this.updateTotalAndNbItems();
    });
  }

  // Update the quantity of a product of the shopping cart and save it in the localStorage
  updateQuantity(): void {
    this.shoppingCartService.saveShoppingCart(this.shoppingCart);
    this.updateTotalAndNbItems();
  }

  // Update the total and the number of product for the display
  updateTotalAndNbItems(): void {
    let total = 0;
    this.nbItems = 0;
    this.shoppingCart.forEach((shoppingCartProduct: ShoppingCartProduct) => {
      total += shoppingCartProduct.product.price * shoppingCartProduct.quantity;
      this.nbItems += shoppingCartProduct.quantity;
    });
    this.total = total.toFixed(2);
  }

  // Remove a product from the shopping cart and update it to the localstorage
  removeProduct(productId: number): void {
    this.shoppingCart = this.shoppingCart.filter((shoppingCartProduct: ShoppingCartProduct) => shoppingCartProduct.product.id !== productId );
    this.shoppingCartService.saveShoppingCart(this.shoppingCart);
    this.updateTotalAndNbItems();
  }

  // Purchase the content of the shopping cart
  purchase(): void {
    console.log('Products purchased !')
  }

  // Load the shopping cart from the local storage.
  ngOnInit(): void {
    this.getShoppingCart();
  }

  goBack(): void {
    this.location.back();
  }
}
