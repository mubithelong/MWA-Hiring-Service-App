import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserserviceService } from './service/userservice.service';

@Injectable()
export class SendTokenInterceptor implements HttpInterceptor {
  constructor(private userService: UserserviceService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!this.userService.getUserState()) {
      return next.handle(request);
    } else {
      const clone = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.userService.userState$.value.token}`,
        },
      });
      return next.handle(clone);
    }
  }
}
