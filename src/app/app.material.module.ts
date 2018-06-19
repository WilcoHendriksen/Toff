import { NgModule }                                       from '@angular/core';
import { BrowserAnimationsModule }                        from '@angular/platform-browser/animations';
import { MatInputModule }                                 from '@angular/material/input';
import { MatFormFieldModule }                             from '@angular/material/form-field';
import { MatButtonModule }                                from '@angular/material/button';
import { MatToolbarModule }                               from '@angular/material/toolbar';
import { MatMenuModule }                                  from '@angular/material/menu';
import { MatIconModule }                                  from '@angular/material/icon';
import { MatDividerModule }                               from '@angular/material/divider';
import { MatListModule }                                  from '@angular/material/list';
import { MatProgressSpinnerModule }                       from '@angular/material/progress-spinner';
import { MatDatepickerModule }                            from '@angular/material/datepicker';
import { MatSlideToggleModule }                           from '@angular/material/slide-toggle';
import { MatMomentDateModule }                            from '@angular/material-moment-adapter';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter }     from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS }    from '@angular/material/dialog';
import { MatSelectModule }                                from '@angular/material/select';
//import { OverlayContainer }                               from '@angular/material/';

@NgModule({
  imports: [ BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatMomentDateModule, MatDialogModule,
    MatSlideToggleModule, MatToolbarModule, MatMenuModule, MatIconModule, MatDividerModule, MatListModule, MatProgressSpinnerModule,
    MatSelectModule ],
  exports: [ BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatMomentDateModule, MatDialogModule,
    MatSlideToggleModule, MatToolbarModule, MatMenuModule, MatIconModule, MatDividerModule, MatListModule, MatProgressSpinnerModule,
    MatSelectModule ],
  providers: [ {provide: MAT_DATE_LOCALE, useValue: 'nl-NL'}, {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}} ]
})

export class MaterialModule { }