import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent }  from './products/product-list/product-list.component';
//import { ProductComponent }       from './products/product/product.component';
import { PageNotFoundComponent }       from './not-found/not-found.component';

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  //{ path: 'product/:id',    component: ProductComponent },
  { path: '',   redirectTo: 'product-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
