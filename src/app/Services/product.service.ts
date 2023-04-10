import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl=environment.baseUrl;
  constructor(private _httpClient:HttpClient) { }
  
  
  
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
         headers:{
             token:localStorage.getItem("token")||""
          }
         })
      }

getCartData():Observable<any>{
return this._httpClient.get(this.baseUrl+'/api/v1/cart',{
  headers:{
    token:localStorage.getItem('token')||""}})
  }

  UpdateCartProductQuantity(count:number,productId:string):Observable<any>{
    return this._httpClient.put(this.baseUrl+'/api/v1/cart/'+productId,{count},{
      headers:{
        token:localStorage.getItem('token')||""}})
  }


  RemoveSpecificCartItem(productId:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+'/api/v1/cart/'+productId,{
      headers:{
        token:localStorage.getItem('token')||""}})
  }


  ClearUserCart():Observable<any>{
    return this._httpClient.delete(this.baseUrl+'/api/v1/cart/',{
      headers:{
        token:localStorage.getItem('token')||""}})
  }
}
