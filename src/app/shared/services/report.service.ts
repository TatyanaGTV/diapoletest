import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Injectable} from "@angular/core";
import { HttpHeaders } from '@angular/common/http';
import {AuthService} from "../../core/auth/AuthService";


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  saveReport (title: string,user_id: string,solution: {}):Observable<{}>{
    const token = this.authService.getTokens()
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.post<{}>(environment.api + '/diagnosis_conclusion', {
      title: title, user_id: user_id,
      solution: solution},
      { headers })
  }

  getReports (){
    return this.http.get<{}>(environment.api + '/diagnosis_conclusion')
  }



}
