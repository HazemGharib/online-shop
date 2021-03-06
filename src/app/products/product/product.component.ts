import { Category } from './../../categories/shared/category.model';
import { CategoryService } from './../../categories/shared/category.service';
import { ModalService } from './../../common/modal/modal.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  categories: Category[];
  selectedCategory;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private tostr: ToastrService,
    private modalService: ModalService) { }

  ngOnInit() {
    this.categoryService.getData().snapshotChanges().subscribe(cat => {
      this.categories = [];
      cat.forEach(element => {
        const y: Category = {
          Name: ((element.payload.toJSON()) as Category).Name,
          $key: element.payload.key
        };
        this.categories.push(y);
      });
      this.resetForm();
    });
  }

  onSubmit(productForm: NgForm) {

    if (productForm.value.$key == null) {
      this.productService.insertProduct(productForm.value);
    } else {
      this.productService.updateProduct(productForm.value);
    }
    this.resetForm(productForm);
    this.tostr.success('Submitted Succcessfully', 'Add Product');
    this.modalService.close('newProductModal');
  }

  resetForm(productForm?: NgForm) {
    if (productForm != null) {
      productForm.reset();
    }

    // Fixing NgForm.reset() UI issue
    setTimeout(() => {
      this.clearSelectedProduct();
    }, 1);
  }

  clearSelectedProduct() {
    this.productService.selectedProduct = {
      $key: null,
      Name: '',
      Description: '',
      Count: 0,
      Price: 0,
      Category: this.selectedCategory,
      Url: '',
    };
  }

  showProductModal() {
    this.selectedCategory = this.categories[0];
    this.modalService.open('newProductModal');
  }
}
