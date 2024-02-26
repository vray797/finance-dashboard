import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  @Output() getImages = new EventEmitter<string>()
  @Input() type: any;
  constructor() {}

  ngOnInit(): void {
    this.getImage(this.type);
    this.getCardType(this.type)
  }

  getImage(type: any): string {
    if (type == 'Visa' || type == 'Visa-eth') {
      return 'assets/images/BTC.png';
    } else {
      return 'assets/images/ETH.png';
    } 
  }

  getCardType(type: string): string {
    if (type == 'Visa' || type == 'Visa-eth') {
      return 'assets/images/visa.png';
    } else {
      return 'assets/images/master card.png'
    }
  }

}
