import { Product } from './product.model';
import { PRODUCTS } from './mock-products';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  // Get all the products from mock file
  getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  // Get product from Id
  getProduct(id: number): Promise<Product> {
    return this.getProducts()
               .then(products => products.find(product => product['id'] === id));
  }

  // Get list of products from list of id.
  getProductsFromId(ids: number[] ): Promise<Product[]> {
    return this.getProducts()
      .then(products => products.filter(product => ~ids.indexOf(product['id'])));
  }
}
