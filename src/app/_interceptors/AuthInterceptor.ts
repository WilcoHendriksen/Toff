import { Injectable }   from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LocalstorageService } from '../_services/localstorage.service';
import { TokenData } from '../_models/tokendata';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private localstorageService: LocalstorageService, private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // don't catch the error let the error interceptor do that...

        // only authenticate requests
        if(req.url.indexOf('authenticate') > 0) {
            var getAuthReq = this.authService.setAuthHeader(req);
            return next.handle(getAuthReq);
        }

        var authReq;
        // if tokendata is null, sent unauthorized request
        if (this.localstorageService.GetTokenData() != null) {
            authReq = req.clone({ setHeaders: { Authorization: this.localstorageService.GetTokenData().access_token }});
        } else {
            authReq = req; 
        }

        return next.handle(authReq).do(event => {
            if (event instanceof HttpResponse) {
                if (event.ok)
                {
                    this.authService.IsLoggedIn = true;
                }
            }
        });
    }


}