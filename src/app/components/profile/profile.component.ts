import {Component, OnInit} from '@angular/core';
import {filter, take} from "rxjs";
import {AuthService} from "../../auth/auth.service";
import {UserClass} from "../../shared/user.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
  user: UserClass = new UserClass();
  profileForm: FormGroup;
  constructor(
    private authService: AuthService
  ) {
    this.initForm();
  }
  ngOnInit() {
    this.authService.userData$
      .pipe(
        filter(data => !!data),
        take(1)
      )
      .subscribe(data => {
        this.user = data;
        this.initForm();
      })
  }

  initForm() {
    this.profileForm = new FormGroup({
      "email": new FormControl(this.user.email, [Validators.required, Validators.email]),
      "iin": new FormControl(this.user.iin, [Validators.required, Validators.minLength(12)]),
      "name": new FormControl(this.user.name, Validators.required),
      "surname": new FormControl(this.user.surname, Validators.required),
      "phone": new FormControl(this.user.phone, Validators.required),
      "projectTheme": new FormControl(this.user.projectTheme, Validators.required),
      "subject": new FormControl(this.user.subject, Validators.required),
    });
  }

  submit() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }
  }

}
