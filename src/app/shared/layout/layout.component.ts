import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../core/auth/AuthService";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    standalone: false
})
export class LayoutComponent implements OnInit {
  isLogged = false;
  constructor(private authservice: AuthService) {
    this.isLogged =  this.authservice.getIsLogin()
  }

  ngOnInit(): void {
    this.authservice.IsLogged$.subscribe((isLogged: boolean)=> {
      this.isLogged = isLogged
    });
  }
  //toCheckIisLogged (){
  //  this.authservice.getIsLogin()
  //  this.isLogged = true
  //}

}
