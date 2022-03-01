import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class SuccessHandlerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((response: any) => {
        if (
          request.method === 'GET' &&
          response.type === 4 &&
          response.status === 200
        ) {
          const body = response.body;
          if (body.content && body.pageable) {

            return response.clone({
              body: {
                content: body.content,
                pageable: {
                  totalPages: body.totalPages,
                  totalItems: body.totalElements,
                  pageSize: body.pageable.pageSize,
                  pageNumber: body.pageable.pageNumber
                }
              }
            });
          }
        }

        return response;
      })
    );
  }
}
