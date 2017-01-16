import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent }      from './products/product-list/product-list.component';
import { ShoppingCartListComponent } from './shopping-cart/shopping-cart-list/shopping-cart-list.component';
import { PageNotFoundComponent }     from './not-found/not-found.component';
import { ProductComponent }          from './products/product/product.component';

import { LoginComponent }            from './authentification/login/login.component';
import { RegisterComponent }         from './authentification/register/register.component';

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'product/:id',    component: ProductComponent },
  { path: 'shopping-cart', component: ShoppingCartListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: 'product-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ShopRoutingModule {}
