import { Component, Input } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'product-list',
  templateUrl: 'app/products/product-list/product-list.component.html',
  styleUrls: ['app/products/product-list/product-list.component.css']
})
export class ProductListComponent {

  @Input()
  products: Array<Product>;

  premiumAccount: boolean = true;
  cart: Array<Product> = [];
  productSelected: Product;

  onSelect(product: Product) {
    console.log(`product ${product.name} was added to cart.`);
    this.productSelected = product;
    this.cart.push(product);
  }
}
