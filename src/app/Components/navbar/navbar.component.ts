import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';

import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
count:number=0
  constructor(public _dataService:DataService,private _productService:ProductService){

    this._productService.productCount.subscribe(count=>{

  console.log(count);
  this.count=count

   });
   
   
  }

}
