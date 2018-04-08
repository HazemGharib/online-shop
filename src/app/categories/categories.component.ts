import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ModalService } from './../common/modal/modal.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories;

  constructor(private firebase: AngularFireDatabase,
    private tostr: ToastrService,
    private modalService: ModalService) { }

  ngOnInit() {
    this.firebase.list('Categories').snapshotChanges().subscribe(cat => {
      this.categories = [];
      cat.forEach(element => {
        const y = element.payload.toJSON();
        this.categories.push(y);
      });
    });
  }

  showCategoryModal() {
    this.modalService.open('newCategoryModal');
  }

}
