import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
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
