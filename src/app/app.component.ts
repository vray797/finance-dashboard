import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { MonthlyReportComponent } from './components/monthly-report/monthly-report.component';
import { FastPaymentComponent } from './components/fast-payment/fast-payment.component';
import { InvestmentsComponent } from './components/investments/investments.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'finance-dashboard';

  public cardType: any;
  public cardChip: any;
  public bitcoinCardType: any;

  constructor() {}

  ngOnInit(): void {
    this.getImages("VISA")
  }

  getImages(type: string) {
    if (type == "VISA") {
      this.bitcoinCardType = 'assets/images/BTC.png';  
      this.cardType = "assets/images/visa.png";
      this.cardChip = "assets/images/card chip.png";
  }
}
}
