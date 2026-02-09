import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent implements OnInit {

  constructor() { }
  //Alt+0169
  rigths = ("©" + new Date().getFullYear()+ " by Tatyana Boyraz." + " Все права защищены.");
 // @Input()isRefresh: boolean =false;
  ngOnInit(): void {

  }

}
