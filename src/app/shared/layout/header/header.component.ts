import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/auth/AuthService";
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  constructor(private authService: AuthService, private router: Router ) {
    this.isLogged =  this.authService.getIsLogin()
  }

  ngOnInit(): void {
    this.authService.IsLogged$.subscribe((isLogged: boolean)=> {
      this.isLogged = isLogged
    });
  }
  logout():void{
    this.authService.logout()
      .subscribe({
        next:() => {
          this.doLogout();
        },
        error:  ()=>{
          this.doLogout();
        }
      })
  }

  doLogout(){
    this.authService.removeTokens();
    this.authService.userId = null;
    this.authService.getIsLogin();
    this.router.navigate(['/']);
  }

}
