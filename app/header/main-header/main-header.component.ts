import { Component, OnInit } from '@angular/core';
import { ShoppingCartProduct } from '../../shopping-cart/shared/shopping-cart-product.model';
import { ShoppingCartService } from '../../shopping-cart/shared/shopping-cart.service';

@Component({
  selector: 'main-header',
  templateUrl: 'app/header/main-header/main-header.component.html',
  styleUrls: ['app/header/main-header/main-header.component.css'],
  providers: [ShoppingCartService]
})
export class MainHeaderComponent implements OnInit {

  shoppingCart: ShoppingCartProduct[] = [];

  constructor(private shoppingCartService: ShoppingCartService) { }

  getShoppingCart(): void {
    this.shoppingCartService.getShoppingCart().then(shoppingCart => this.shoppingCart = shoppingCart);
  }

  ngOnInit(): void {
    this.getShoppingCart();
  }
}
