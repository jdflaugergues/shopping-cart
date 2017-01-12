export class Product {
  id: number;
  category: string;
  name: string;
  desc: string;
  price: number;

  constructor(id: number, category: string, name: string, desc: string, price: number) {
    this.id = id;
    this.category = category;
    this.name = name;
    this.desc = desc;
    this.price = price;
  }
}
