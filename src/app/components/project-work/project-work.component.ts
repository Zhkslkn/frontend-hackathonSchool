import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {filter, Observable, take} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CONFIG} from "../../shared/config.model";
import {AuthService} from "../../auth/auth.service";
import {UserClass} from "../../shared/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-work',
  templateUrl: './project-work.component.html'
})
export class ProjectWorkComponent {
  projectForm: FormGroup;
  showError: boolean = false;
  errorMessage: string;

  user: UserClass = new UserClass();

  showFileError: boolean = false;
  errorFileMessage: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    this.initForm();
    this.authService.userData$
      .pipe(
        filter(data => !!data),
        take(1)
      ).subscribe(user => {
        this.user = user;
    })
  }

  initForm() {
    this.projectForm = new FormGroup({
      "projectName": new FormControl('', Validators.required),
      "subject": new FormControl('', Validators.required),

      "nameFirst": new FormControl('', Validators.required),
      "surnameFirst": new FormControl('', Validators.required),
      "iinFirst": new FormControl('', Validators.required),

      "nameSecond": new FormControl('', Validators.required),
      "surnameSecond": new FormControl('', Validators.required),
      "iinSecond": new FormControl('', Validators.required),

      "nameThird": new FormControl('', Validators.required),
      "surnameThird": new FormControl('', Validators.required),
      "iinThird": new FormControl('', Validators.required),

      "nameFourth": new FormControl('', Validators.required),
      "surnameFourth": new FormControl('', Validators.required),
      "iinFourth": new FormControl('', Validators.required),

      "projectFile": new FormControl(null, Validators.required),
    });
  }

  onFileSelected(event: any): void {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const fileName = selectedFile.name;
      const fileExtension = fileName.split('.').pop().toLowerCase();

      if (['docx', 'pdf', 'pptx'].includes(fileExtension)) {
        this.showFileError = false;
        this.errorFileMessage = '';
        this.uploadFile(selectedFile).subscribe(
          (response) => {
            alert("Файл успешно добавлено")
            console.log(response.newFile._id)
            this.projectForm.controls['projectFile'].setValue(response.newFile._id);
          },
          (error) => {
            console.error('Error uploading file:', error);
          }
        );
      } else {
        this.showFileError = true;
        this.errorFileMessage = 'Недопустимый формат файла';
      }
    }
  }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${CONFIG.api}/dashboard/upload`, formData);
  }

  submitAll() {
    if (this.projectForm.invalid) {
      this.showError = true;
      this.errorMessage = 'Заполните все данные!';
      this.projectForm.markAllAsTouched();
      return;
    } else {
      this.showError = false;
      this.errorMessage = '';

      this.http.post<any>(`${CONFIG.api}/dashboard/projects`, {
        projectName: this.projectForm.controls['projectName'].value,
        subject: this.projectForm.controls['subject'].value,
        nameFirst: this.projectForm.controls['nameFirst'].value,
        surnameFirst: this.projectForm.controls['surnameFirst'].value,
        iinFirst: this.projectForm.controls['iinFirst'].value,
        nameSecond: this.projectForm.controls['nameSecond'].value,
        surnameSecond: this.projectForm.controls['surnameSecond'].value,
        iinSecond: this.projectForm.controls['iinSecond'].value,
        nameThird: this.projectForm.controls['nameThird'].value,
        surnameThird: this.projectForm.controls['surnameThird'].value,
        iinThird: this.projectForm.controls['iinThird'].value,
        nameFourth: this.projectForm.controls['nameFourth'].value,
        surnameFourth: this.projectForm.controls['surnameFourth'].value,
        iinFourth: this.projectForm.controls['iinFourth'].value,
        projectFile: this.projectForm.controls['projectFile'].value,
      }).subscribe(data => {
        if (data) {
          alert('Регистрация на проектную работу завершена!');
          this.router.navigate(['/user/dashboard']).then();
        }
      }, err => {
        console.log(err)
      })


    }
  }
}
