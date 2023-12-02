import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {OlympiadComponent} from "./olympiad/olympiad.component";
import {ProjectsAllComponent} from "./projects-all/projects-all.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'olympiad',
    component: OlympiadComponent
  },
  {
    path: 'projects-all',
    component: ProjectsAllComponent
  },
  {
    path: 'students',
    component: UsersComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
