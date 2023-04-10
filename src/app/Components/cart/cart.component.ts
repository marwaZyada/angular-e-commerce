import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
products:any[]=[]
flag:string="true"
constructor(public _productService:ProductService){
 
}

ngOnInit(): void {
  this._productService.getCartData().subscribe({
    next:(res)=>{
this.products=res.data.products;
// this.flag="false";
    },
    error:(error)=>{
console.log(error);
// this.flag="true"

    },
    complete:()=>{

    }
  })
}

updateCount(count:number,productId:string){

  if(count<=0){
this.removeProductFromCart(productId)
  }
  else{

  this._productService.UpdateCartProductQuantity(count,productId).subscribe((res)=>{console.log(res.data.products)
 this.products=res.data.products
 
  }
    );
}
}


removeProductFromCart(productId:string){
  this._productService.RemoveSpecificCartItem(productId).subscribe((res)=>this.products=res.data.products)
}


clearCart(){
  this._productService.ClearUserCart().subscribe((res)=>{this.products=[] ;
    // this.flag='true'
  })
}
}
