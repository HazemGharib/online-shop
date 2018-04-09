import { Category } from './shared/category.model';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ModalService } from './../common/modal/modal.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from './shared/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories;

  constructor(
    private categoryService: CategoryService,
    private tostr: ToastrService,
    private modalService: ModalService) { }

  ngOnInit() {
    this.clearSelectedCategory();
    this.categoryService.getData().snapshotChanges().subscribe(cat => {
      this.categories = [];
      cat.forEach(item => {
        const y = item.payload.toJSON();
        this.categories.push(y);
      });
    });
  }

  showCategoryModal() {
    this.modalService.open('newCategoryModal');
  }

  onSubmit(categoryForm: NgForm) {

    if (categoryForm.value.$key == null) {
      this.categoryService.insertCategory(categoryForm.value);
      this.tostr.success('Submitted Succcessfully', 'Add Category');
    } else {
      this.categoryService.updateCategory(categoryForm.value);
      this.tostr.success('Submitted Succcessfully', 'Update Category');
    }
    this.resetForm(categoryForm);
    this.tostr.success('Submitted Succcessfully', 'Add Category');
  }

  resetForm(categoryForm?: NgForm) {
    if (categoryForm != null) {
      categoryForm.reset();
    }

    // Fixing NgForm.reset() UI issue
    setTimeout(() => {
      this.clearSelectedCategory();
    }, 1);
  }

  clearSelectedCategory() {
    this.categoryService.selectedCategory = {
      $key: null,
      Name: '',
    };
  }

  truncate(string, length) {
    if (string.length > length) {
      return string.substring(0, length - 2) + '...';
    } else {
      return string;
    }
  }
}
