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
    this.resetForm();
  }

  onSubmit(productForm: NgForm) {
    console.log('Hello');
  }

  resetForm(productForm?: NgForm) {
    console.log('reset');
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
