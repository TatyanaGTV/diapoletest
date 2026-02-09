import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../../core/auth/AuthService";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {LoginResponseType} from "../../../types/loginResponse.type";
import {DefaultResponseType} from "../../../types/defaultResponse.type";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    standalone: false
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private authservice: AuthService, private router: Router) { }
  signupForm = this.fb.group({
    name:['', [Validators.required]],
    lastName:['', [Validators.required]],
    email:['',[Validators.email]],
    password:['',[ Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)]],
    passwordRepeat:['',[ Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)]],

  })
  ngOnInit(): void {
  }
   signup () {

     if ( this.signupForm.value.name && this.signupForm.value.lastName && this.signupForm.value.email && this.signupForm.value.password
       && this.signupForm.value.passwordRepeat){
       console.log('signup called');
       localStorage.setItem('userName',this.signupForm.value.name);
       localStorage.setItem('userLastname', this.signupForm.value.lastName)

       this.authservice.signup(this.signupForm.value.name, this.signupForm.value.lastName, this.signupForm.value.email,this.signupForm.value.password,this.signupForm.value.passwordRepeat)
         .subscribe({
           next: (data: DefaultResponseType | LoginResponseType) => {
             console.log(1);
             let error = null;
             if ((data as DefaultResponseType).error){
               console.log(2)
               error = (data as DefaultResponseType).message;
             }
             const loginResponse = data as LoginResponseType
             this.authservice.userId = loginResponse.user.id;
             alert('Вы успешно зарегистрировались');
             this.router.navigate(['/login']);
           },
           error:(errorResponse: HttpErrorResponse) => {
             if (errorResponse.error && errorResponse.error.message) {
               alert(errorResponse.error.message)
             } else {
               alert('Ошибка регистрации')
             }
           }
         });
     }
   }
}
