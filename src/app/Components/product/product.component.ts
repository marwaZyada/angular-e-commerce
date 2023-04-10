import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input() product:any

constructor(private _productService:ProductService){
    
}

addToCart(productId:string){
  this._productService.postProductToCart(productId).subscribe( (res)=>console.log(res));
     
}
}
