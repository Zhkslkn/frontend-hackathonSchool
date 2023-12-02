import {Component, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {CourcesService} from "../../shared/cources.service";
import {filter, take} from "rxjs";

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html'
})
export class CourcesComponent implements OnInit{
  course: string;
  courseData: any;

  constructor(
    private router: Router,
    private courcesService: CourcesService
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      let arr = event.url.split('/');
      this.course = arr[arr.length - 1];
      this.getCourseData(this.course);
    });
  }

  getCourseData(course: string) {
    this.courcesService.handleCources(course)
      .pipe(
        take(1)
      )
      .subscribe(data => {
        this.courseData = data;
      })
  }

  ngOnInit() {
    let arr = this.router.url.split('/');
    this.course = arr[arr.length - 1];
    this.getCourseData(this.course);
  }

}
