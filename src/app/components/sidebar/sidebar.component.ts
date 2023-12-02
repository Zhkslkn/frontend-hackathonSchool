import {Component, ElementRef, Renderer2} from '@angular/core';
import {RouteService} from "../../shared/route.service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  firstToggle: boolean = false;
  secondToggle: boolean = false;
  thirdToggle: boolean = false;
  fourthToggle: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private routeService: RouteService,
    private authService: AuthService,
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.isAdminShow();
  }

  changeRouter(url: string) {
    this.routeService.changeRouter(url);
  }

  isAdminShow() {
    const role = localStorage.getItem('ROLE');
    this.isAdmin = role === 'ROLE_ADMIN';
  }

  changeRouterAuth(url: string) {
    this.authService.logout();
    this.changeRouter(url);
  }

  toggleMenu() {
    const htmlElement = this.el.nativeElement.ownerDocument.documentElement;
    if (htmlElement.classList.contains('layout-menu-expanded')) {
      this.renderer.removeClass(htmlElement, 'layout-menu-expanded');
    } else {
      this.renderer.addClass(htmlElement, 'layout-menu-expanded');
    }
  }
}
