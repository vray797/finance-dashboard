import { Component } from '@angular/core';
import { GraphDetailsComponent } from './graph-details/graph-details.component';

@Component({
  selector: 'app-fast-payment',
  standalone: true,
  imports: [ GraphDetailsComponent ],
  templateUrl: './fast-payment.component.html',
  styleUrl: './fast-payment.component.css'
})
export class FastPaymentComponent {

}
