import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  categories;
  products;

  constructor(private firebase: AngularFireDatabase) {  }

  ngOnInit() {

    this.firebase.list('Categories').snapshotChanges().subscribe(cat => {
      this.categories = [];
      cat.forEach(element => {
        const y = element.payload.toJSON();
        this.categories.push(y);
      });
    });

    this.firebase.list('Products').snapshotChanges().subscribe(prod => {
      this.products = [];
      prod.forEach(element => {
        const y = element.payload.toJSON();
        this.products.push(y);
      });
    });
  }

  add() {
    this.firebase.list('Products').snapshotChanges();
  }
}
