import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
@Injectable()
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.productList = this.firebase.list('Products');
    return this.productList;
  }

  insertProduct(product: Product) {
    this.productList.push({
      Category: product.Category,
      Count: product.Count,
      Description: product.Description,
      Name: product.Name,
      Price: product.Price
    });
  }

  updateProduct(product: Product) {
    this.productList.update(product.$key, {
      Category: product.Category,
      Count: product.Count,
      Description: product.Description,
      Name: product.Name,
      Price: product.Price
    });
  }

  deleteProduct($key: string) {
    this.productList.remove($key);
  }
}
