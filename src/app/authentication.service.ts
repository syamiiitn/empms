import { Injectable } from '@angular/core';
import {
         HttpRequest,
         HttpHandler,
         HttpEvent,
         HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { nextContext } from '@angular/core/src/render3';
@Injectable()
export class AuthenticationService implements HttpInterceptor {

  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
  {
    //read token from localStorage
    const idToken=localStorage.getItem('idToken');
    //if token found ,clone it to request object at handler
    console.log(idToken);
    if(idToken){
      const cloned=req.clone({
        headers:req.headers.set("Authorization","Bearer "+idToken)
      })
      return next.handle(cloned);
    }
    else{
      return next.handle(req);
    }
  }
 
}


