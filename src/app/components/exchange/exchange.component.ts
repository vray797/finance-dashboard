import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { InfoCardComponent } from './info-card/info-card.component';

@Component({
  selector: 'app-exchange',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    InfoCardComponent
  ],
  templateUrl: './exchange.component.html',
  styleUrl: './exchange.component.css'
})
export class ExchangeComponent {

}
