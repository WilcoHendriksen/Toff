import { Injectable }   from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
//import { Observable } from 'rxjs/observable';
import { Observable } from 'rxjs/Rx';
import { _throw } from 'rxjs/observable/throw';
import 'rxjs/add/operator/catch';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { AuthService } from '../_services/auth.service';
import { LocalstorageService } from '../_services/localstorage.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    
    constructor(private authService: AuthService, private localstorageService: LocalstorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        var cachedRequest = req;

        return next.handle(req)
            .catch((error) => {

                if (error.status === 401) {
                    return this.authService.refreshToken(this.localstorageService.GetTokenData().refresh_token).flatMap(tokenData => {
                        this.localstorageService.SetTokenData(tokenData);
                        const authReq = req.clone({ headers: req.headers.set('authorization', tokenData.access_token) });
                        return next.handle(authReq);
                    });
                }

                // log out
                this.authService.logout();

                // return all others errors 
                return Observable.throw(error);

            });
    }
}