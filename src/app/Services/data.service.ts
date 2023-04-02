import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/user';
import { LoginUser } from '../Interfaces/login-user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
baseUrl:string="https://route-ecommerce.onrender.com";
token:string=""
  constructor(private _httpClient:HttpClient,private _router:Router) { }


  register(data:User) : Observable<any>{
    return this._httpClient.post(this.baseUrl+'/api/v1/auth/signup',data);
  }

  login(data:LoginUser):Observable<any>{
    return this._httpClient.post(this.baseUrl+'/api/v1/auth/signin',data)
  }

  logout(){
    this.token="";
    localStorage.setItem("token","")
    this._router.navigate(["/signin"]);
  }
}
