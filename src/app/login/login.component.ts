import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { TokenData }            from '../_models/tokendata'
import { AuthService }          from '../_services/auth.service';
import { LocalstorageService }  from '../_services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})

export class LoginComponent implements OnInit {
  hide = true;
  username: string;
  password: string;

  constructor(private router: Router, private authService: AuthService, private localstorageService: LocalstorageService) { }
  
  ngOnInit() { }

  DoLogin(): void {

    this.authService.login(this.username, this.password)
    .subscribe(
      (data) => 
            {
              this.authService.IsLoggedIn = true;
              this.localstorageService.SetTokenData(data);
              this.router.navigate(['./dashboard']);       
            },
      (error) =>
            {
              console.error(error);
            }
    );
  }

}