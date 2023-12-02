import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CONFIG} from "../../shared/config.model";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/auth.service";
import {catchError, EMPTY, filter, take} from "rxjs";
import {UserClass} from "../../shared/user.model";

@Component({
  selector: 'app-register-olympiad',
  templateUrl: './register-olympiad.component.html'
})
export class RegisterOlympiadComponent implements OnInit{
  userForm: FormGroup;
  subject: string;
  userData: UserClass = new UserClass();
  showError: boolean = false;
  errorMessage: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    this.initForm();

    this.activatedRoute.queryParams.subscribe(params => {
      this.subject = params['subject'];
    })

    this.authService.userData$
      .pipe(
        filter(data => !!data),
        take(1)
      )
      .subscribe(user => {
        this.userData = user;
        this.initForm();
      })
  }

  submit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.httpClient.post(`${CONFIG.api}/dashboard/olympiad`, {
      name: this.userForm.controls['name'].value,
      surname: this.userForm.controls['surname'].value,
      class: this.userForm.controls['class'].value,
      teacherName: this.userForm.controls['teacherName'].value,
      teacherSurname: this.userForm.controls['teacherSurname'].value,
      subject: this.userForm.controls['subject'].value,
      iin: this.userData.iin
    })
      .pipe(
        catchError(err => {
          this.showError = true;
          this.errorMessage = err.error.message;
          return EMPTY;
        })
      )
      .subscribe(data => {
        if (data) {
          this.showError = false;
          alert('Вы успешно зарегестрировались на олимпиаду!');
          this.router.navigate(['/user']).then();
        }
      })
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = new FormGroup({
      "name": new FormControl('', Validators.required),
      "surname": new FormControl('', Validators.required),
      "class": new FormControl(7, Validators.required),
      "teacherName": new FormControl('', Validators.required),
      "teacherSurname": new FormControl('', Validators.required),
      "subject": new FormControl(this.subject, Validators.required),
      "iin": new FormControl(this.userData.iin, Validators.required),
    });
  }
}
