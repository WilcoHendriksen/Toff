import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentdetailComponent } from './appointmentdetail.component';

describe('AppointmentdetailComponent', () => {
  let component: AppointmentdetailComponent;
  let fixture: ComponentFixture<AppointmentdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
