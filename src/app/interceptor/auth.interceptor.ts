import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../service/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authUser = this.authService.getAuthUser();
    if (authUser && authUser.token) {
      request = request.clone({
        setHeaders: {
          'x-access-token': authUser.token
        }
      });
    }
    return next.handle(request);
  }
}
