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

  constructor(
    private productService: ProductService,
    private tostr: ToastrService,
    private modalService: ModalService) { }

  ngOnInit() {
    this.productService.getData();
    this.clearSelectedProduct();
  }

  onSubmit(productForm: NgForm) {

    if (productForm.value.$key == null) {
      this.productService.insertProduct(productForm.value);
    } else {
      this.productService.updateProduct(productForm.value);
    }
    this.resetForm(productForm);
    this.tostr.success('Submitted Succcessfully', 'Add Product');
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
      Category: ''
    };
  }

  showProductModal() {
    this.modalService.open('errorModal');
  }
}
