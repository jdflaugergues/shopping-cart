import { Component, OnInit } from '@angular/core';
import { ShoppingCartProduct } from '../../shopping-cart/shared/shopping-cart-product.model';
import { ShoppingCartService } from '../../shopping-cart/shared/shopping-cart.service';

import { UserService }  from '../../authentification/shared/user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'main-header',
  templateUrl: 'app/header/main-header/main-header.component.html',
  styleUrls: ['app/header/main-header/main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  shoppingCart: ShoppingCartProduct[] = [];
  currentUser: string = '';
  nbItemsShoppingCart: number = 0;
  subscription: Subscription;
  subscriptionNbItems: Subscription;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private userService: UserService
  ) {
    this.currentUser = userService.currentUser;
    this.subscription = userService.currentUserChange$.subscribe((currentUser: string) => {
      this.currentUser = currentUser;
    });

    this.nbItemsShoppingCart = shoppingCartService.nbItemsShoppingCart;
    this.subscriptionNbItems = shoppingCartService.nbItemsShoppingCartChange$.subscribe((nbItemsShoppingCart: number) => {
      this.nbItemsShoppingCart = nbItemsShoppingCart;
    });
  }

  getShoppingCart(): void {
    this.shoppingCartService.getShoppingCart().then(shoppingCart => this.shoppingCart = shoppingCart);
  }

  logOut(): void {
    this.userService.logout();
  }

  ngOnInit(): void {
    this.getShoppingCart();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionNbItems.unsubscribe();
  }
}
