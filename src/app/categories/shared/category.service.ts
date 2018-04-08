import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Category } from './category.model';
@Injectable()
export class CategoryService {

  categoryList: AngularFireList<any>;
  selectedCategory: Category = new Category();


  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.categoryList = this.firebase.list('Categories');
    return this.categoryList;
  }

  insertCategory(category: Category) {
    this.categoryList.push({
      Name: category.Name,
    });
  }

  updateCategory(category: Category) {
    this.categoryList.update(category.$key, {
      Name: category.Name,
    });
  }

  deleteCategory($key: string) {
    this.categoryList.remove($key);
  }

}
