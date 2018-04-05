import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // debugger;
    this.productService.getData();
    this.resetForm();
  }

  onSubmit(productForm: NgForm) {
    // debugger;
    console.log(productForm);
    // this.productService.insertProduct(productForm.value);
    // this.resetForm(productForm);

    if (productForm.value.$key == null) {
      this.productService.insertProduct(productForm.value);
    } else {
      this.productService.updateProduct(productForm.value);
    }
    this.resetForm(productForm);
    // this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }

  resetForm(productForm?: NgForm) {
    if (productForm != null) {
      productForm.reset();
    }

    this.productService.selectedProduct = {
      $key: null,
      Name: '',
      Description: '',
      Count: 0,
      Price: 0,
      Category: ''
    };
  }
}
