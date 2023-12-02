import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {
  users: any = [
    {
      email: "zhkslkn04@gmail.com",
      iin: 123123123123,
      name: "qwerty",
      surname: "asdqwe",
      avatar: "5.png",
      phone: "",
      password: "$2a$10$fXefrcl7PKi5Em/kEiMMn.0gbvccqgg0gJJR9m6FyYBd0eMeXEenS",
      projectTheme: "",
      subject: "",
    }
  ]
}
