import { Component, Input } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'product',
  templateUrl: 'app/products/product/product.component.html',
  styleUrls: ['app/products/product/product.component.css']
})
export class ProductComponent {

  @Input()
  product: Product;
}
