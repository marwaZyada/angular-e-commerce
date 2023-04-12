import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
id:string="";
product!:any;
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    } } ,
    nav: true
  }

  constructor(private _productService:ProductService,private _activatedRoute:ActivatedRoute){
    
 this._activatedRoute.paramMap.subscribe((parms)=> this.id=parms.get('id')||"")
  this._productService.getproductDetails(this.id).subscribe((res)=>{this.product=res.data
  console.log(res.data)})
  }

  addToCart(productId:string){
    this._productService.postProductToCart(productId).subscribe( (res)=>{console.log(res)
      this._productService.productCount.next(res.numOfCartItems)
      
    });
       
  }


}
