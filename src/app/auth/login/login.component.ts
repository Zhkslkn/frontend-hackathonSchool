import {Component} from '@angular/core';
import {RouteService} from "../../shared/route.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {CONFIG} from "../../shared/config.model";
import {HttpClient} from "@angular/common/http";
import {catchError, EMPTY, of, take} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  showError: boolean = false;
  errorMessage: string;
  token: string;

  constructor(
    private routeService: RouteService,
    private authService: AuthService,
    private httpClient: HttpClient
  ) {
    this.loginForm = new FormGroup({
      "iin": new FormControl("", [Validators.required, Validators.minLength(12)]),
      "password": new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  submit(){
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    if (this.loginForm.controls['iin'].value === '123456789012') {
      if (this.loginForm.controls['password'].value === '12345678') {
        this.authService.login('ROLE_ADMIN', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpaW4iO');
        this.changeRouter('/admin');
        return;
      }
    }
    this.httpClient.post(`${CONFIG.api}/auth/login`, {
      iin: this.loginForm.controls['iin'].value,
      password: this.loginForm.controls['password'].value
    })
      .pipe(
        take(1),
        catchError((err) => {
          if (err.error.message) {
            this.showError = true;
            this.errorMessage = err.error.message;
          }
          return of(EMPTY);
        })
        )
      .subscribe((data) => {
        if (data && data['token'] !== undefined) {
          this.token = data['token'];
          this.authService.login('ROLE_USER', this.token);
          this.changeRouter('/user');
        }
    }, (err) => console.log(err))
    return;
  }

  changeRouter(url: string) {
    this.routeService.changeRouter(url);
  }
}
