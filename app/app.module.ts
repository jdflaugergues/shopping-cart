import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ProductListComponent, ProductComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
