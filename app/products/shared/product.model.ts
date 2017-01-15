export class Product {
  id: number;
  category: string;
  name: string;
  desc: string;
  price: number;
  urlImage: string;

  constructor(id: number, category: string, name: string, desc: string, price: number, urlImage: string) {
    this.id = id;
    this.category = category;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.urlImage = urlImage;
  }
}
