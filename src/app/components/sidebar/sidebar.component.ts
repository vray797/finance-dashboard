import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, NgClass, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  private isVisited: boolean = false

  constructor() {}

  checkVisited() {
    this.isVisited = !this.isVisited;
    const ele =  document.getElementById('link');
    ele?.classList.toggle('active')

  }

}
