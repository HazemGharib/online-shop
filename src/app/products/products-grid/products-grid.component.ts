import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {
  products;

  constructor(private firebase: AngularFireDatabase) {  }

  ngOnInit() {
    this.firebase.list('Products').snapshotChanges().subscribe(prod => {
      this.products = [];
      prod.forEach(element => {
        const y = element.payload.toJSON();
        this.products.push(y);
      });
    });
  }

}
