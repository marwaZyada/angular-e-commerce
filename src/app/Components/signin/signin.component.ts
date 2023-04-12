import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private _dataService:DataService,private _router:Router){}

  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,Validators.required)
  })


  handleLogin(){
    console.log(this.loginForm.value)


    try{
this._dataService.login(this.loginForm.value).subscribe({
  next:(res)=>{
    console.log(res);
    
if(res.message=='success'){
  localStorage.setItem('token',res.token);
  this._dataService.token=res.token;
this._router.navigate(['home']);
}
  },
  error:(error)=>{
console.log(error.error.errors.msg)
  }
})
    }
    catch(error){
      console.log(error)
    }
  }
}
