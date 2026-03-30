import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../core/auth/AuthService";


@Component({
  selector: 'app-main-picture',
  standalone: false,
  templateUrl: './main-picture.component.html',
  styleUrl: './main-picture.component.scss'
})
export class MainPictureComponent {
   @Input() isLogged = false;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
 /* enter(){
    this.router.navigate(['login'])

  }*/
}
