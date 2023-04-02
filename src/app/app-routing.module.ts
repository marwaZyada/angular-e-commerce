import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignoutComponent } from './Components/signout/signout.component';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductComponent } from './Components/product/product.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { BrandsComponent } from './Components/brands/brands.component';

const routes: Routes = [
  {path:"signin" ,component:SigninComponent},
  {path:"signout" ,component:SignoutComponent},
  {path:"register" ,component:RegisterComponent},
  {path:"home" ,component:HomeComponent},
  {path:"cart" ,component:CartComponent},
  {path:"product" ,component:ProductComponent},
  {path:"categories" ,component:CategoriesComponent},
  {path:"brands" ,component:BrandsComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
