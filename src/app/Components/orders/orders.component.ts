import { Component } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class AllordersComponent {
userId:string=""
  orders:any[]=[]
constructor(private _productService:ProductService){
  console.log();
 this.userId=localStorage.getItem("userid")||""
  this._productService.getUserOrders(this.userId).subscribe(res=>{
   
    this.orders=res
  })
}
}
