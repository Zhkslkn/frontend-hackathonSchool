import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./auth/auth.guard";
import {LoginComponent} from "./auth/login/login.component";
import {NotFoundComponent} from "./root/not-found/not-found.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {ForgotPasswordComponent} from "./auth/forgot-password/forgot-password.component";
import {MainPageComponent} from "./root/main-page/main-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'user',
    component: MainPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./root/root.module').then(module => module.RootModule),
      }
    ],
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_USER'
    }
  },
  {
    path: 'admin',
    component: MainPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule),
      }
    ],
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  // { path: 'admin', component: UserDashboardComponent,
  //   canActivate: [AuthGuard],
  //   data: {
  //     role: 'ROLE_ADMIN'
  //   }
  // },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
