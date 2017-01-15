import { Product } from '../../products/shared/product.model';

export class ShoppingCartProduct {
  product: Product;
  quantity: number;

  constructor(product: Product, quantity: number) {

    this.product = product;
    this.quantity = quantity;
  }
}
