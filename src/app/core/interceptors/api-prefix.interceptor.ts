import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '@app/env';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const hasBaseURL = /^(http|https):/i.test(request.url);

    if (!hasBaseURL && request.url.indexOf('assets/locale') < 0 && request.url.indexOf('assets/images') < 0) {
      request = request.clone({url: `${environment.apiBaseURL}${request.url}`});
    }

    return next.handle(request);
  }
}
