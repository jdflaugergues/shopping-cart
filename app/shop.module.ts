import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { ShopComponent }             from './shop.component';
import { ProductListComponent }      from './products/product-list/product-list.component';
import { ProductComponent }          from './products/product/product.component';
import { ShoppingCartListComponent } from './shopping-cart/shopping-cart-list/shopping-cart-list.component';
import { PageNotFoundComponent }     from './not-found/not-found.component';
import { MainHeaderComponent }       from './header/main-header/main-header.component';
import { FooterComponent }           from './footer/footer.component';
import { ProductService }            from './products/shared/product.service';


//import { ShopRoutingModule }       from './shop-routing.module';



@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    //{ path: 'shop', component: ShopComponent },
    //{ path: 'product/:id', component: ProductComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: 'shopping-cart', component: ShoppingCartListComponent },
    { path: '',   redirectTo: 'product-list', pathMatch: 'full' },
    //{ path: '**', component: PageNotFoundComponent }
  ])],
  declarations: [ ShopComponent, ProductListComponent, ShoppingCartListComponent, ProductComponent,
                  PageNotFoundComponent, MainHeaderComponent, FooterComponent ],
  providers:    [ ProductService ],
  bootstrap:    [ ShopComponent ]
})
export class ShopModule {}
