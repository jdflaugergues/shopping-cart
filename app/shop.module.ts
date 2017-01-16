import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }     from '@angular/http';

import { ShopComponent }             from './shop.component';
import { ProductListComponent }      from './products/product-list/product-list.component';
import { ProductComponent }          from './products/product/product.component';
import { ShoppingCartListComponent } from './shopping-cart/shopping-cart-list/shopping-cart-list.component';
import { PageNotFoundComponent }     from './not-found/not-found.component';
import { MainHeaderComponent }       from './header/main-header/main-header.component';
import { FooterComponent }           from './footer/footer.component';
import { RegisterComponent }         from './authentification/register/register.component';
import { LoginComponent }            from './authentification/login/login.component';

import { ProductService }            from './products/shared/product.service';
import { ShoppingCartService }       from './shopping-cart/shared/shopping-cart.service';
import { UserService }               from './authentification/shared/user.service';

import { ShopRoutingModule }         from './shop-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, ShopRoutingModule],
  declarations: [ ShopComponent, ProductListComponent, ShoppingCartListComponent, ProductComponent,
                  PageNotFoundComponent, MainHeaderComponent, FooterComponent, RegisterComponent, LoginComponent ],
  providers:    [ ProductService, UserService, ShoppingCartService ],
  bootstrap:    [ ShopComponent ]
})
export class ShopModule {}
