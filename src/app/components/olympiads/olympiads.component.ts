import { Component } from '@angular/core';

@Component({
  selector: 'app-olympiads',
  templateUrl: './olympiads.component.html'
})
export class OlympiadsComponent {

  olympiadSubjects: any = [
    {
      title: 'Английский язык',
      text: 'Олимпиада по Английскому языку',
      tag: 'Доступно',
      subject: 'english'
    },
    {
      title: 'Русский язык',
      text: 'Олимпиада по Русскому языку',
      tag: 'Доступно',
      subject: 'russian'
    },
    {
      title: 'Математика',
      text: 'Олимпиада по Математике',
      tag: 'Доступно',
      subject: 'math'
    },
    {
      title: 'Физика',
      text: 'Олимпиада по Физике',
      tag: 'Доступно',
      subject: 'physics'
    },
    {
      title: 'Информатика',
      text: 'Олимпиада по Информатике',
      tag: 'Доступно',
      subject: 'it'
    }

  ]

}
