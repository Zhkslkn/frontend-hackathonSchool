import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(
    private router: Router
  ) { }

  changeRouter(url: string) {
    this.router.navigate([url]).then();
  }
}
