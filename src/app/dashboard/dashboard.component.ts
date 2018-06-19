import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
// import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  week: string;
  ma: string;
  di: string;
  wo: string;
  do: string;
  vr: string;
  date: moment.Moment;
  m: moment.Moment;

  constructor(private router: Router) { 
    
  }
  
  ngOnInit() {
    this.m = moment().locale('nl'); // use dutch
    this.date = this.m.startOf('isoWeek'); // beginning of the iso week (mondays)
    this.ma = this.date.format('dd D MMM');
    this.di = this.date.add(1, 'day').format('dd D MMM');
    this.wo = this.date.add(1, 'day').format('dd D MMM');
    this.do = this.date.add(1, 'day').format('dd D MMM');
    this.vr = this.date.add(1, 'day').format('dd D MMM');
    this.date = this.date.subtract(4, 'day'); // set back the day to monday
    this.week = this.date.format('YYYY / w'); 
  }

  nextWeek() {
    this.date = this.date.add(1, 'week');
    this.ma = this.date.format('dd D MMM');
    this.di = this.date.add(1, 'day').format('dd D MMM');
    this.wo = this.date.add(1, 'day').format('dd D MMM');
    this.do = this.date.add(1, 'day').format('dd D MMM');
    this.vr = this.date.add(1, 'day').format('dd D MMM');
    this.date = this.date.subtract(4, 'day'); // set back the day to monday
    this.week = this.date.format('YYYY / w'); 
  }

  previousWeek() {
    this.date = this.date.subtract(1, 'week');
    this.ma = this.date.format('dd D MMM');
    this.di = this.date.add(1, 'day').format('dd D MMM');
    this.wo = this.date.add(1, 'day').format('dd D MMM');
    this.do = this.date.add(1, 'day').format('dd D MMM');
    this.vr = this.date.add(1, 'day').format('dd D MMM');
    this.date = this.date.subtract(4, 'day'); // set back the day to monday
    this.week = this.date.format('YYYY / w'); 
  }

  addAppointment() {
    this.router.navigate(['./appointment']);
  }

}
