import {Observable, Subject, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {DefaultResponseType} from "../../types/defaultResponse.type";
import {LoginResponseType} from "../../types/loginResponse.type";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public accessKey: string = 'accessToken';
  public refreshKey: string = 'refreshToken';
  public userIdKey: string = 'userId';

  public IsLogged$:Subject<boolean> = new Subject<boolean>()
  private IsLogged: boolean = false;
  constructor(private http: HttpClient) {
    this.IsLogged = !!localStorage.getItem(this.accessKey);
  }

  login (email: string, password: string): Observable<DefaultResponseType | LoginResponseType> {
    return this.http.post<DefaultResponseType | LoginResponseType>(environment.api + '/login', {
      email, password
    })
  }

  signup (name:string, lastName: string, email: string, password: string,  passwordRepeat: string): Observable<DefaultResponseType | LoginResponseType> {
    return this.http.post<DefaultResponseType | LoginResponseType>(environment.api + '/signup', {
      name,lastName, email, password,passwordRepeat
    })
  }

  logout (): Observable<DefaultResponseType> {
    const tokens = this.getTokens();
    if (tokens && tokens.refreshToken){
      return this.http.post<DefaultResponseType>(environment.api + '/logout', {
        refreshToken :tokens.refreshToken
      })
    }
    throw throwError(()=> 'Can find token')
  }
  public getIsLogin (){
    return this.IsLogged
  }

  public setTokens(accessToken: string, refreshToken:string): void{
    localStorage.setItem(this.accessKey, accessToken);
    localStorage.setItem(this.refreshKey, refreshToken);
    this.IsLogged=true;
    this.IsLogged$.next(true);
  }
  public removeTokens(): void{
    localStorage.removeItem(this.accessKey);
    localStorage.removeItem(this.refreshKey);
    this.IsLogged=false;
    this.IsLogged$.next(false);
  }

  public getTokens(): {accessToken: string|null, refreshToken: string | null }{
    return {
      accessToken:localStorage.getItem(this.accessKey),
      refreshToken: localStorage.getItem(this.refreshKey)
    }
  }

  get userId(): null | string {
    return localStorage.getItem(this.userIdKey)
  }

  set userId (id:string | null){
    if (id){
      localStorage.setItem(this.userIdKey,id);
    }else {
      localStorage.removeItem(this.userIdKey);
    }
  }

  refresh(): Observable<DefaultResponseType | LoginResponseType>{
    const tokens = this.getTokens()
    if (tokens && tokens.refreshToken){
      return this.http.post<DefaultResponseType>(environment.api + '/refresh', {
        refreshToken :tokens.refreshToken
      })
    }
    throw throwError(()=> 'Can not use token');
  }
}
