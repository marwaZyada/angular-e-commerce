import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { ProductService } from './Services/product.service';
import { LoadService } from './load.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {


  constructor(public _LoadService:LoadService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._LoadService.flag.next(true);
    console.log("zzero");
    
    let c=request.clone()
    return next.handle(c)
    .pipe(
      finalize(()=>{this._LoadService.flag.next(false)
      console.log("one");
      
      })
    );
  }
}
