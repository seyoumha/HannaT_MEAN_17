import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
 titles = 'Create a New Product'
 product = {title:'', price:'', img:''}
  constructor(private _productService: ProductService) { }

  formSubmitted(){
    this._productService.addProduct(this.product);
    this.product = {title:'', price:'', img:''}
  }

  ngOnInit() {
  }

}
