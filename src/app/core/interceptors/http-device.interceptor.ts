import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { LocalStorageService } from '../web-storage';

@Injectable({
  providedIn: 'root',
})
export class HttpDeviceInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenReq: any;
    const deviceId = this.localStorageService.getItem('deviceId');

    if (deviceId) {
      tokenReq = req.clone({
        headers: req.headers.set('Device-id', deviceId)
      });
    } else {
      return next.handle(req);
    }

    return next.handle(tokenReq);
  }
}
