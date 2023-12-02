import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html'
})
export class MyWorksComponent {
  prop: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(param => {
      this.prop = param['prop'];
    })
  }
}
