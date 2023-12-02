import { Component } from '@angular/core';
import {RouteService} from "../../shared/route.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CONFIG} from "../../shared/config.model";
import {catchError, EMPTY, of, take} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {
  registerForm: FormGroup;
  showError: boolean = false;
  errorMessage: string;

  constructor(
    private routeService: RouteService,
    private httpClient: HttpClient
  ) {
    this.registerForm = new FormGroup({
      "email": new FormControl("", [Validators.required, Validators.email]),
      "iin": new FormControl("", [Validators.required, Validators.minLength(12)]),
      "name": new FormControl("", Validators.required),
      "surname": new FormControl("", Validators.required),
      "password": new FormControl("", [Validators.required, Validators.minLength(8)]),
    });
  }

  submit(){
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.httpClient.post(`${CONFIG.api}/auth/register`, {
      email: this.registerForm.controls['email'].value,
      iin: this.registerForm.controls['iin'].value,
      name: this.registerForm.controls['name'].value,
      surname: this.registerForm.controls['surname'].value,
      password: this.registerForm.controls['password'].value
    })
      .pipe(
        take(1),
        catchError((err) => {
          console.log(err);
          if (err.error.message) {
            this.showError = true;
            this.errorMessage = err.error.message;
          }
          return of(EMPTY);
        })
      )
      .subscribe((data) => {
        if (data) {
          alert("Вы успешно зарегистрировались!");
          this.changeRouter('/login');
        }
      })
    return;
  }

  changeRouter(url: string) {
    this.routeService.changeRouter(url);
  }
}
