import { Product } from './../shared/product.model';
import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {
  products;

  constructor(
    private firebase: AngularFireDatabase,
    private productService: ProductService) { }

  ngOnInit() {
    this.productService.getData().snapshotChanges().subscribe(prod => {
      this.products = [];
      prod.forEach(item => {
        const y = item.payload.toJSON();
        y['$key'] = item.key;
        this.products.push(y as Product);
      });
    });
  }

  truncate(string, length) {
    if (string.length > length) {
      return string.substring(0, length - 2) + '...';
    } else {
      return string;
    }
  }
}
