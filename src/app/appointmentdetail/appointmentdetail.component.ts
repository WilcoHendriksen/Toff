import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointmentdetail',
  templateUrl: './appointmentdetail.component.html',
  styleUrls: ['./appointmentdetail.component.scss']
})
export class AppointmentdetailComponent implements OnInit {
  times: string[];
  begintTime: string;
  endTime: string;

  constructor() { }

  ngOnInit() {
    this.times = this.createTimeArray(7, 23);
  }

  createTimeArray(start: number, end: number): string[] {
    let retVal = new Array;

    for(var i = start; i < end; i++) {
      let hour: string = i.toString();
      // add lead zero
      if (hour.length == 1) {
        hour = "0" + i;
      }
      retVal.push(hour + ":00");
      retVal.push(hour + ":15");
      retVal.push(hour + ":30");
      retVal.push(hour + ":45");
    }

    return retVal;
  }
}

interface Time {
  hour?: string;
  minute?: string;
}