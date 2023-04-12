import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
id!:string

  orderForm:FormGroup=new FormGroup({
    details:new FormControl(null),
    phone:new FormControl(null),
    city:new FormControl(null)
  })
  constructor(private _productSevice:ProductService,private _acivatedRoute:ActivatedRoute,private _router:Router){

    this._acivatedRoute.paramMap.subscribe(param=>{
      console.log(param.get("id"));
      this.id=param.get("id")||""
      
    })
  }


  formSubmit(orderForm:FormGroup,cartId:string){
    this._productSevice.createOrder(orderForm.value,cartId).subscribe(res=>{
      
        console.log(res);
       
        location.href=res.session.url
      }
    
      
    )
      
  
  }
// formSubmit(orderForm:FormGroup){
// console.log(orderForm);
// }
}
