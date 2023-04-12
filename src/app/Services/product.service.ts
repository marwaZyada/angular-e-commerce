import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from './../../environments/environment';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl=environment.baseUrl;


  productCount:BehaviorSubject<number>=new BehaviorSubject(0)
count:number=0;

cartCount!:number

  constructor(private _httpClient:HttpClient) { 
    
    this.getCartData().subscribe(res=>{
      this.productCount.next(res.numOfCartItems)
    
    
    })


  
  }
  
//   show(){
//     this.flag.next(true);
//   }

// hide(){
//   this.flag.next(false)
// }

  
  getproduct():Observable<any>{
    return  this._httpClient.get(this.baseUrl+'/api/v1/products')
    }

    getproductDetails(id:string):Observable<any>{
     return this._httpClient.get(this.baseUrl+`/api/v1/products/${id}`)
    }

    getcategories():Observable<any>{
      return  this._httpClient.get(this.baseUrl+'/api/v1/categories')
      }

      getBrans():Observable<any>{
        return this._httpClient.get(this.baseUrl+'/api/v1/brands')
      }

      postProductToCart(productId:string):Observable<any>{

       
    
        return this._httpClient.post(this.baseUrl+'/api/v1/cart',{productId},{
        //  headers:{
        //      token:localStorage.getItem("token")||""
        //   }
         })
      }

getCartData():Observable<any>{
return this._httpClient.get(this.baseUrl+'/api/v1/cart',{
  // headers:{
  //   token:localStorage.getItem('token')||""}
  })
  }

  UpdateCartProductQuantity(count:number,productId:string):Observable<any>{
    return this._httpClient.put(this.baseUrl+'/api/v1/cart/'+productId,{count},{
      // headers:{
      //   token:localStorage.getItem('token')||""}
      
      })
  }


  RemoveSpecificCartItem(productId:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+'/api/v1/cart/'+productId,{
      // headers:{
      //   token:localStorage.getItem('token')||""}
      })
  }


  ClearUserCart():Observable<any>{
    return this._httpClient.delete(this.baseUrl+'/api/v1/cart/',{
      // headers:{
      //   token:localStorage.getItem('token')||""}
      
      })
  }


  createOrder(shippingAddress:FormGroup,cartId:string):Observable<any>{
return this._httpClient.post(`${this.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,{shippingAddress},{
  // headers:{
  //   token:localStorage.getItem('token')||""
  // }
})
  }


  getUserOrders(Id:string):Observable<any>{
return this._httpClient.get(this.baseUrl+`/api/v1/orders/user/${Id}`)
  }
}
