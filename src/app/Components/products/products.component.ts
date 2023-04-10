import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:any[]=[]
  @Input() search:string=""
constructor(private _productService:ProductService){

  this._productService.getproduct().subscribe((res)=>{
  this.products=res.data;
  console.log(this.products)
})
}
}
