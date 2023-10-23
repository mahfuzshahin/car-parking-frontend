import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {map, tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string= 'http://127.0.0.1:4001/api'
  constructor(private http: HttpClient, private router: Router) { }

  postLogin(user: User){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(user);
    return this.http.post(this.baseUrl+'/login',body, {'headers':headers})
      .pipe(map(result=>{
        sessionStorage.setItem('authUser', JSON.stringify(result));
        return result;
      }))
  }
  getAuthUser(){
    return JSON.parse(sessionStorage.getItem('authUser') as string);
  }
  get isLoggedIn() {
    if (localStorage.getItem('authUser')) {
      return true;
    }
    return false;
  }
  logout() {
    return this.http.get(`${this.baseUrl}/logout`)
      .pipe(tap(() => {
        localStorage.removeItem('authUser')
      }));
  }

  profile() {
    return this.http.get(`${this.baseUrl}/profile`);
  }
  getVehicleType(){
    return this.http.get(`${this.baseUrl}/vehicle/type`);
  }
}
