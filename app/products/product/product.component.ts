import 'rxjs/add/operator/switchMap';

import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';
import { ShoppingCartService } from '../../shopping-cart/shared/shopping-cart.service';

@Component({
  selector: 'product',
  templateUrl: 'app/products/product/product.component.html',
  styleUrls: ['app/products/product/product.component.css'],
  providers: [ProductService, ShoppingCartService]
})
export class ProductComponent {

  @Input() product: Product;

  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  // Add a product to the shopping Cart
  addProductToShoppingCart(product: Product) {
    this.shoppingCartService.addShoppingCartProduct(product);
  }

  ngOnInit(): void {

    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

}
