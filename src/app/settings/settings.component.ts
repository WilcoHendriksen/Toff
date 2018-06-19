import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { LocalstorageService }  from '../_services/localstorage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  webservice: string;

  constructor(private localstorageService: LocalstorageService, private router: Router) { }

  ngOnInit() {
    this.webservice = this.localstorageService.GetItem("webservice");
  }

  save() {
    this.localstorageService.SaveItem("webservice", this.webservice);
    this.router.navigate(['./login']);
  }

}
