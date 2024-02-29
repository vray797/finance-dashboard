import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardComponent } from '../card/card.component';
import { MonthlyReportComponent } from '../monthly-report/monthly-report.component';
import { FastPaymentComponent } from '../fast-payment/fast-payment.component';
import { InvestmentsComponent } from '../investments/investments.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    SidebarComponent,
    CardComponent,
    MonthlyReportComponent,
    FastPaymentComponent,
    InvestmentsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

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
