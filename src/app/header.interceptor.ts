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
export class HeaderInterceptor implements HttpInterceptor {

  // constructor(public _LoadService:LoadService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // this._LoadService.flag.next(true);
    let x=request.clone({
      headers:request.headers.set('token',localStorage.getItem("token")||"")
     })
    return next.handle(x)
  //   .pipe(
  //     finalize(()=>{this._LoadService.flag.next(false)})
  //   );
  }
}
