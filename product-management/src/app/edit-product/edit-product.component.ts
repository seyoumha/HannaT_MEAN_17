import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  titles = "Edit Product"
  product = {title:'', price:'', img:''}
  id:number=null;

  constructor(private activatedRoute: ActivatedRoute, private _productService: ProductService, private _router: Router) {}


  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params.id
      this.product = this._productService.getProduct(params.id);

    } );
  }
  formUpdated(){
    this._productService.updateProduct(this.id, this.product)
    this._router.navigate(['products'])
  }
}
