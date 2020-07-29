import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { UserService } from '@app/services/user.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenHttpInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.handleAccess(request, next);
  }

  private handleAccess(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.userService.isAuth()) {
      const token = this.userService.token;
      // HttpHeader object immutable - copy values
      const headerSettings: { [name: string]: string | string[]; } = {};

      for (const key of request.headers.keys()) {
        headerSettings[key] = request.headers.getAll(key);
      }

      if (token) {
        headerSettings['Token-Id'] = token.id.toString();
      }

      headerSettings['Content-Type'] = 'application/json';

      const newHeader = new HttpHeaders(headerSettings);

      const changedRequest = request.clone({headers: newHeader});

      return next.handle(changedRequest);
    }

    return next.handle(request);
  }

}
