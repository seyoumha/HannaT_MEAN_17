import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
title = 'Products List'
products = []
constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.products= this._productService.products
    console.log('products', this.products)

  }
  destroy(i){
    this._productService.getProducts(i);
  }

}
