import {Injectable, Inject} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {HY_INTERCEPTOR_HEADER} from '../../../data/CONFIG';

@Injectable()
export class ReqInterceptor implements HttpInterceptor {
  token: string;
  clonedRequest: any;
  tokenHeader: string;

  constructor(private authService: AuthService,
              @Inject(HY_INTERCEPTOR_HEADER) _tokenHeader: string) {
    this.tokenHeader = _tokenHeader;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authService.getToken().subscribe(data => {
      console.log(data.getValue());
      this.token = data.getValue();
    });
    if (this.token) {
      this.clonedRequest = req.clone({
        headers: req.headers.set(this.tokenHeader, 'Bearer ' + this.token)
      });
    } else {
      this.clonedRequest = req;
    }
    return next.handle(this.clonedRequest).do(event => {
      if (event instanceof HttpResponse) {
      } else {
      }
    });
  }
}
