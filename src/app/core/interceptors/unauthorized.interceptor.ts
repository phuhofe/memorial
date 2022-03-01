import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpEvent, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';

import {Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private store: Store
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(() => {
        },
        (err) => {
          if (err.status === 401) {
            if (!this.router.url.includes('signin')) {
              return null;
              // return this.store.dispatch(new Logout());
            }
          }
        }),
    );
  }
}
