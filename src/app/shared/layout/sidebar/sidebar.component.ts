import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: false
})
export class SidebarComponent implements OnInit {
  user: string| null = '';
  userLastname: string| null = '';
  constructor() { }

  ngOnInit(): void {
      this.user = localStorage.getItem('userName');
      this.userLastname = localStorage.getItem('userLastname')
  }

}
