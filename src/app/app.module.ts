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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import{ FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './Components/footer/footer.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { ProductsComponent } from './Components/products/products.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from './pipes/search.pipe';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { AllordersComponent} from './Components/orders/orders.component';
import { UserComponent } from './Components/user/user.component';
import { LoadingInterceptor } from './loading.interceptor';
import { HeaderInterceptor } from './header.interceptor';
import { LoaderComponent } from './Components/loader/loader.component';

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
    FooterComponent,
    NotfoundComponent,
    ProductdetailsComponent,
    ProductsComponent,
    SearchPipe,
    CheckoutComponent,
    AllordersComponent,
    UserComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:HeaderInterceptor,
     multi:true

  },{
    provide:HTTP_INTERCEPTORS,
    useClass:LoadingInterceptor,
     multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
