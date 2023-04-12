import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductService } from 'src/app/Services/product.service';
import { LoadService } from 'src/app/load.service';
import { LoadingInterceptor } from 'src/app/loading.interceptor';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
products:any[]=[]

setTimeOutCount:any;
id!:string
userId:string='';
constructor(public _productService:ProductService,public _LoadService:LoadService){
 
}

ngOnInit(): void {
  this._productService.getCartData().subscribe({
    next:(res)=>{
      console.log(res);
     console.log(res.data._id);
     this.id=res.data._id
         
     console.log(res.data.cartOwner);
     
     this.userId=res.data.cartOwner
     localStorage.setItem("userid",this.userId)
      
this.products=res.data.products||[];
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

  clearTimeout(this.setTimeOutCount)
  if(count<=0){
this.removeProductFromCart(productId)
  }
  else{
this.setTimeOutCount=setTimeout(()=>{

  this._productService.UpdateCartProductQuantity(count,productId).subscribe((res)=>{console.log(res.data.products)
    this.products=res.data.products
    
     }
       );
  
},500)

}
}


removeProductFromCart(productId:string){
  
  this._productService.RemoveSpecificCartItem(productId).subscribe((res)=>{this.products=res.data.products;
    console.log(res.data.products);
    this._productService.productCount.next(res.numOfCartItems)
   
    
  })
}


clearCart(){
  this._productService.ClearUserCart().subscribe((res)=>{this.products=[] ;
    if(res.message=="success"){
    this._productService.productCount.next(0)
    }
   console.log(res);
   
  })
}
}
