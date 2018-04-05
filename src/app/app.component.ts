import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  categories;

  constructor(private firebase: AngularFireDatabase) {  }

  ngOnInit() {

    this.firebase.list('Categories').snapshotChanges().subscribe(cat => {
      this.categories = [];
      cat.forEach(element => {
        const y = element.payload.toJSON();
        this.categories.push(y);
      });
    });
  }
}
