import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignoutComponent } from './Components/signout/signout.component';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';

import { CategoriesComponent } from './Components/categories/categories.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { ProductsComponent } from './Components/products/products.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { AllordersComponent } from './Components/orders/orders.component';
import { UserComponent } from './Components/user/user.component';

const routes: Routes = [
  {path:"" ,redirectTo:'home',pathMatch:'full'},
  {path:"signin" ,component:SigninComponent},
  {path:"signout" ,component:SignoutComponent},
  {path:"register" ,component:RegisterComponent},
  {path:"home" ,canActivate:[AuthGuard],component:HomeComponent},
  {path:"cart" ,canActivate:[AuthGuard],component:CartComponent},
  {path:"products" ,canActivate:[AuthGuard],component:ProductsComponent},
  {path:"product/:id" ,canActivate:[AuthGuard],component:ProductdetailsComponent},
  {path:"categories" ,canActivate:[AuthGuard],component:CategoriesComponent},
  {path:"brands" ,canActivate:[AuthGuard],component:BrandsComponent},
  {path:"allorders",canActivate:[AuthGuard],component:AllordersComponent ,children:[
    {path:"user", component:UserComponent}
  ] },
  {path:"checkout/:id" ,canActivate:[AuthGuard],component:CheckoutComponent},
  {path:"**" ,component:NotfoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
