import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogyesnoComponent } from './dialogyesno.component';

describe('DialogyesnoComponent', () => {
  let component: DialogyesnoComponent;
  let fixture: ComponentFixture<DialogyesnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogyesnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogyesnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
