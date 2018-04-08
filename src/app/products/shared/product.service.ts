import { Category } from './../../categories/shared/category.model';
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

  insertProduct(product) {
    this.productList.push({
      Category: product.Category.$key,
      Count: product.Count,
      Description: product.Description,
      Name: product.Name,
      Price: product.Price,
      Url: product.Url,
    });
  }

  updateProduct(product) {
    this.productList.update(product.$key, {
      Category: product.Category,
      Count: product.Count,
      Description: product.Description,
      Name: product.Name,
      Price: product.Price,
      Url: product.Url,
    });
  }

  deleteProduct($key: string) {
    this.productList.remove($key);
  }
}
