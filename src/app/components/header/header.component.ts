import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {RouteService} from "../../shared/route.service";
import {Router} from "@angular/router";
import {filter, take} from "rxjs";
import {UserClass} from "../../shared/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
  toggleShow: boolean = false;
  user: UserClass = new UserClass();
  isAdmin: boolean = false;

  constructor(
    private authService: AuthService,
    private routeService: RouteService,
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.isAdminShow();
  }

  isAdminShow() {
    const role = localStorage.getItem('ROLE');
    this.isAdmin = role === 'ROLE_ADMIN';
  }

  ngOnInit() {
    this.authService.userData$
      .pipe(
        filter(data => !!data),
        take(1)
      )
      .subscribe(data => {
        this.user = data;
        console.log(this.user)
      })
  }

  logout() {
    this.authService.logout();
    this.routeService.changeRouter('/login');
  }

  changeRouter(url: string) {
    if (!this.router.url.split('/').includes(url)) {
      this.routeService.changeRouter(this.router.url + url);
      return;
    }
    return;
  }

  toggleMenu() {
    const htmlElement = this.el.nativeElement.ownerDocument.documentElement;
    console.log(htmlElement)
    if (htmlElement.classList.contains('layout-menu-expanded')) {
      this.renderer.removeClass(htmlElement, 'layout-menu-expanded');
    } else {
      this.renderer.addClass(htmlElement, 'layout-menu-expanded');
    }
  }
}
