import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';
import { LoginComponent }               from './login/login.component';
import { LogoutComponent }              from './logout/logout.component';
import { DashboardComponent }           from './dashboard/dashboard.component';
import { ClientsComponent }             from './clients/clients.component'
import { ClientdetailComponent }        from './clientdetail/clientdetail.component';
import { SettingsComponent }            from './settings/settings.component';
import { AppointmentdetailComponent }   from './appointmentdetail/appointmentdetail.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, data: { title: 'Inloggen' } },
    { path: 'logout', component: LogoutComponent },
    { path: 'clients', component: ClientsComponent, data: { title: 'Klanten' } },
    { path: 'settings', component: SettingsComponent, data: { title: 'Instellingen' } },
    { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
    { path: 'client', component: ClientdetailComponent, data: { title: 'Klant' } },
    { path: 'client/:id', component: ClientdetailComponent, data: { title: 'Klant' } },
    { path: 'appointment', component: AppointmentdetailComponent, data: { title: 'Nieuwe afspraak' } }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes) 
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }