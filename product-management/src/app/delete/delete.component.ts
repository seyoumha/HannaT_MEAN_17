import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {ActivatedRoute, RouterModule} from "@angular/router";


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private _productService: ProductService) {}

  ngOnInit() {
  }

}
