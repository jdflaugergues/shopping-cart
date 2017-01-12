import { Component, OnInit } from '@angular/core';
import { Config } from './config.service';
import { Product } from './products/shared/product.model';
import { ProductService } from './products/shared/product.service';

@Component({
  selector: 'shopping-app',
  templateUrl: 'app/app.component.html',
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  name = Config.MAIN_HEADING;
  products: Product[];

  constructor(private productService: ProductService) { }

  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
