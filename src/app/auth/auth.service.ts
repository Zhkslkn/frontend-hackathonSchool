import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, EMPTY, of} from "rxjs";
import {CONFIG} from "../shared/config.model";
import {JwtHelperService} from "@auth0/angular-jwt";
import {UserClass} from "../shared/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;
  roleAs: string;
  decodedToken: any;
  user: any;
  userData$: BehaviorSubject<UserClass> = new BehaviorSubject<UserClass>(null);


  constructor(
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
    this.getUser();
  }

  login(value: string, token: string) {
    this.isLogin = true;
    this.roleAs = value;
    localStorage.setItem('STATE', 'true');
    localStorage.setItem('ROLE', this.roleAs);
    localStorage.setItem('TOKEN', token);
    return of({ success: this.isLogin, role: this.roleAs });
  }

  logout() {
    this.isLogin = false;
    this.roleAs = '';
    localStorage.setItem('STATE', 'false');
    localStorage.removeItem('ROLE');
    localStorage.removeItem('TOKEN');
    return of({ success: this.isLogin, role: '' });
  }

  getUser() {
    const token = localStorage.getItem('TOKEN');
    const role = localStorage.getItem('ROLE');
    if (token && role !== 'ROLE_ADMIN') {
      this.decodedToken = this.decodeToken(token);
      const id = this.decodedToken.userId

      this.httpClient.post(`${CONFIG.api}/auth/getUser`, {
        id: id
      })
        .subscribe(data => {
          if (data) {
            this.user = data;
            this.userData$.next(this.user);
          }
        })
    }
    return of(null);
  }

  decodeToken(token: string): any {
    try {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    this.isLogin = loggedIn === 'true';
    return this.isLogin;
  }

  getRole() {
    this.roleAs = localStorage.getItem('ROLE');
    return this.roleAs;
  }
}
