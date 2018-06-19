import { Component, OnInit, Input }    from '@angular/core';
import { AuthService }          from '../_services/auth.service';
import { Location }             from '@angular/common';
import { Router }               from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private authService: AuthService, 
    private location: Location, 
    private router: Router
  ) { }

  @Input() public title: string;

  ngOnInit() { }

  public isLoggedIn() {
     return this.authService.IsLoggedIn;
  }

  goBack(): void {
    this.location.back();
  }
}
