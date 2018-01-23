import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductService {
  products:Array<any> = [
    {title: 'watch', price: 2},
    {title: 'earring', price: 26},
    {title: 'car', price: 20000}

  ]
  constructor() { }

  addProduct(product){
    this.products.push(product);
  }

  updateProduct(i, product){
    this.products[i] = product
  }

  getProduct(i){
    return this.products[i]
  }

  getProducts(i){
    return this.products.splice(i,1)
  }

}
