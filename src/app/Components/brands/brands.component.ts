import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
brands:any[]=[]
  constructor(private _productService:ProductService){
   
    
  }
  ngOnInit(): void {
    this._productService.getBrans().subscribe((res)=>{
      console.log("brands");
      
      this.brands=res.data}
    );
  }
}
