import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EditProductComponent} from './edit-product/edit-product.component';
import{HomeComponent} from './home/home.component';
import {NewProductComponent} from './new-product/new-product.component';
import {ProductsComponent} from './products/products.component';
import {DeleteComponent} from './delete/delete.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    children: []
  },
  {
    path: 'products/new',
    pathMatch: 'full',
    component: NewProductComponent,
    children: []
  },
  {
    path: 'products/edit/:id',
    pathMatch: 'full',
    component: EditProductComponent,
    children: []
  },
  {
    path: 'products',
    pathMatch: 'full',
    component: ProductsComponent,
    children: []
  },
  {
    path: 'delete',
    pathMatch: 'full',
    component: DeleteComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
