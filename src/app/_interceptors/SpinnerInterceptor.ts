import { Injectable }   from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LocalstorageService } from '../_services/localstorage.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { _throw } from 'rxjs/observable/throw';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    
    private requestCount: number = 0;

    constructor(private Ng4LoadingSpinnerService: Ng4LoadingSpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // don't catch the error let the error interceptor do that...
        this.requestCount++;

        if (this.requestCount == 1) {
            this.Ng4LoadingSpinnerService.show();
            //console.log('spinner show');
        }      

        return next.handle(req).do(
            (event: HttpEvent<any>) => 
            {
                if (event instanceof HttpResponse) {
                    this.requestCount--;
                    if (this.requestCount == 0) {
                        this.Ng4LoadingSpinnerService.hide();
                        //console.log('spinner hide');
                    }
                }
            },
            (error: any) =>
            {
                this.requestCount--;
                if (this.requestCount == 0) {
                    this.Ng4LoadingSpinnerService.hide();
                    //console.log('spinner hide');
                }
            });
    }
}