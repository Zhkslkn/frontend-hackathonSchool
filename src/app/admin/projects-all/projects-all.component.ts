import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-all',
  templateUrl: './projects-all.component.html'
})
export class ProjectsAllComponent {
  projects: any = [
    {
      projectName: "Eco project",
      subject: "physics",
      nameFirst: "123",
      surnameFirst: "first name",
      iinFirst: "second name",
      nameSecond: "qwe",
      surnameSecond: "qwe",
      iinSecond: "q12333333333",
      nameThird: "123",
      surnameThird: "qwe",
      iinThird: "123333333333",
      nameFourth: "qwe",
      surnameFourth: "asd",
      iinFourth: "123333333333",
      projectFile: "656a5d49458efcfb5c0f2aea",
    },
    {
      projectName: "Eco project",
      subject: "physics",
      nameFirst: "123",
      surnameFirst: "qwe",
      iinFirst: "112222222222",
      nameSecond: "qwe",
      surnameSecond: "qwe",
      iinSecond: "q12333333333",
      nameThird: "123",
      surnameThird: "qwe",
      iinThird: "123333333333",
      nameFourth: "qwe",
      surnameFourth: "asd",
      iinFourth: "123333333333",
      projectFile: "656a5d49458efcfb5c0f2aea",
    }
  ]
}
