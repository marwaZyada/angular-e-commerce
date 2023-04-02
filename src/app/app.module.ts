import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignoutComponent } from './Components/signout/signout.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductComponent } from './Components/product/product.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { BrandsComponent } from './Components/brands/brands.component';
import {HttpClientModule} from '@angular/common/http'
import{ ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './Components/footer/footer.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignoutComponent,
    RegisterComponent,
    HomeComponent,
    CartComponent,
    ProductComponent,
    CategoriesComponent,
    BrandsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
