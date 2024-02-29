import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InvestmentsComponent } from './components/investments/investments.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { FastPaymentComponent } from './components/fast-payment/fast-payment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'exchange', component: ExchangeComponent},
];
