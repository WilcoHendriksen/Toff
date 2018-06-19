// module
import { BrowserModule }              from '@angular/platform-browser';
import { NgModule }                   from '@angular/core';
import { FormsModule }                from '@angular/forms';
import { ReactiveFormsModule }        from '@angular/forms';
import { HttpClientModule }           from '@angular/common/http';
import { HTTP_INTERCEPTORS }          from '@angular/common/http';
import { Ng4LoadingSpinnerModule }    from 'ng4-loading-spinner';
import { AppRoutingModule }           from './app.routing.module';
import { MaterialModule }             from './app.material.module';

// interceptors 
import { AuthInterceptor }            from './_interceptors/AuthInterceptor';
import { SpinnerInterceptor }         from './_interceptors/SpinnerInterceptor';
import { ErrorInterceptor }           from './_interceptors/ErrorInterceptor';

// services 
import { AuthService }                from './_services/auth.service';
import { ClientService }              from './_services/client.service';
import { LocalstorageService }        from './_services/localstorage.service';
import { MessageService }             from './_services/message.service';

// components 
import { AppComponent }               from './app.component';
import { SpinnerComponent }           from './spinner/spinner.component';
import { LoginComponent }             from './login/login.component';
import { DashboardComponent }         from './dashboard/dashboard.component';
import { NavigationComponent }        from './navigation/navigation.component';
import { MessageComponent }           from './message/message.component';
import { LogoutComponent }            from './logout/logout.component';
import { ClientdetailComponent }      from './clientdetail/clientdetail.component';
import { ClientsComponent }           from './clients/clients.component';
import { SettingsComponent }          from './settings/settings.component';
import { DialogyesnoComponent }       from './dialogyesno/dialogyesno.component';
import { AppointmentdetailComponent } from './appointmentdetail/appointmentdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    LoginComponent,
    DashboardComponent,
    NavigationComponent,
    LogoutComponent,
    ClientdetailComponent,
    MessageComponent,
    ClientsComponent,
    SettingsComponent,
    DialogyesnoComponent,
    AppointmentdetailComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  },
  AuthService, ClientService, LocalstorageService, MessageService
  ],
  entryComponents: [
    DialogyesnoComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
