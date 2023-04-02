import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public _dataServices:DataService,private _router:Router){}

  registerform:FormGroup=new FormGroup({
    "name": new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
    "email": new FormControl(null,[Validators.required,Validators.email]),
    "password": new FormControl(null,[Validators.required]),
    "rePassword":new FormControl(null,[Validators.required]),
    "phone": new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  })


  handleRegister(){
    console.log(this.registerform)
  try{
this._dataServices.register(this.registerform.value).subscribe({
  next:(res)=>{
if(res.message=='success'){
this._router.navigate(["/signin"])
}
  },
  error:(error)=>{
console.log(error.error.errors.msg);

  }
})
  }

  catch(error){
console.log(error)
  }
}
}
