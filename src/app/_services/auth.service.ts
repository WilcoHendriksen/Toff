import { Injectable, OnInit }               from '@angular/core';
import { Observable }               from 'rxjs/Observable';
import { HttpClient, HttpRequest }  from '@angular/common/http';
import { TokenData }                from '../_models/tokendata';
import { Router }                   from '@angular/router';
import { LocalstorageService }      from './localstorage.service';

@Injectable()
export class AuthService {

  IsLoggedIn: boolean = false;

  constructor(private http: HttpClient, private localstorageService: LocalstorageService, private router: Router) { } 

  login(Username: string, Password: string): Observable<TokenData> {
    return this.http.post<TokenData>(
      this.localstorageService.GetItem("webservice") + "/api/authenticate", 
      "granttype=password&username=" + Username + "&password=" + Password);
  }
    
  refreshToken(RefreshToken: string): Observable<TokenData> {
    return this.http.post<TokenData>(
      this.localstorageService.GetItem("webservice") + "/api/authenticate", 
      "granttype=refreshtoken&refreshtoken=" + RefreshToken);
  }

  logout(): void {
    this.localstorageService.RemoveItem("TokenData");
    this.IsLoggedIn = false;
    this.router.navigate(['./login']); 
  }
  
  setAuthHeader(request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({ setHeaders: { 'Content-Type': 'application/x-www-form-urlencoded'}});
  }
}
