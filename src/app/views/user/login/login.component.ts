import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../../core/auth/AuthService";
import {DefaultResponseType} from "../../../types/defaultResponse.type";
import {LoginResponseType} from "../../../types/loginResponse.type";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent implements OnInit {

  constructor( private fb: FormBuilder, private authservice: AuthService, private router: Router) { }
  loginForm = this.fb.group({
    email:['',[Validators.email, Validators.required]],
    password:['',[ Validators.required]],
  });

  ngOnInit(): void {
  }
  login (): void{
    console.log(this.loginForm.value.email)
    console.log(this.loginForm.value.password)
    if (this.loginForm.valid && this.loginForm.value.email && this.loginForm.value.password){
      this.authservice.login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe(
          {
            next:(data:DefaultResponseType | LoginResponseType) => {
              console.log(1)
              let error = null;
             if ((data as DefaultResponseType).error){
                error = (data as DefaultResponseType).message;
              }
              const loginResponse = data as LoginResponseType
              if (!loginResponse.tokens.accessToken || !loginResponse.tokens.refreshToken || !loginResponse.user.id ){
                error = "Ошибка авторизации";
              }

              if (error){
                alert(error);
                throw new Error(error)
              }
              this.authservice.setTokens(loginResponse.tokens.accessToken,loginResponse.tokens.refreshToken);
              this.authservice.userId = loginResponse.user.id;
              alert('Вы успешно авторизовались');
              this.authservice.getIsLogin ();
              this.router.navigate(['/main']);
            },
            error: (errorResponse: HttpErrorResponse) => {
              if (errorResponse.error && errorResponse.error.message) {
                alert(errorResponse.error.message)
              } else {
                alert('Ошибка авторизации')
              }
            }
          }
        )
    }
  }
}
