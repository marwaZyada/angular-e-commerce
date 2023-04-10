import { Component } from '@angular/core';

import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

categories:any[]=[];
  constructor(private _productService:ProductService){

    this._productService.getcategories().subscribe((res)=>{
    this.categories=res.data;
    console.log(this.categories)
  })
  }
}
