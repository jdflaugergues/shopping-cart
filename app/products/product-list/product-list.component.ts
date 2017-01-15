  import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';
import { ShoppingCartProduct } from '../../shopping-cart/shared/shopping-cart-product.model';
import { ShoppingCartService } from '../../shopping-cart/shared/shopping-cart.service';

@Component({
  selector: 'product-list',
  templateUrl: 'app/products/product-list/product-list.component.html',
  styleUrls: ['app/products/product-list/product-list.component.css'],
  providers: [ProductService, ShoppingCartService]
})
export class ProductListComponent {

  products: Product[];
  currentCategory: string;
  cart: Array<Product> = [];
  productSelected: Product;

  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) { }

  onSelect(product: Product) {
    console.log(`product ${product.name} was added to cart.`);
    this.productSelected = product;
    this.cart.push(product);
  }

  // Add a product to the shopping Cart
  addProductToShoppingCart(product: Product) {
    this.shoppingCartService.addShoppingCartProduct(product);
  }

  // Get all the products from the product service
  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }

  // Load all the products on initialize
  ngOnInit(): void {
    this.getProducts();
  }

  // Apply the category filter to the product list
  filterCategory(category: string) {
    this.currentCategory = category;
    this.productService.getProducts().then(products => this.products = products.filter((product: Product) => product.category === category));
  }
}
