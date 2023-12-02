import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RouteService} from "../../shared/route.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {
  forgotForm: FormGroup;

  constructor(
    private routeService: RouteService
  ) {
    this.forgotForm = new FormGroup({
      "email": new FormControl("", [Validators.required, Validators.email])
    });
  }

  submit(){
    if (this.forgotForm.invalid) {
      this.forgotForm.markAllAsTouched();
      return;
    }
    alert('Ссылка для сброса пароля было отправлено на ваш емайл. Пожалуйста, попробуйте еще раз зайти.');
    this.changeRouter('/login');
  }

  changeRouter(url: string) {
    this.routeService.changeRouter(url);
  }
}
