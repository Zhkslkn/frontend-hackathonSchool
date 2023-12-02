import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfileComponent} from "../components/profile/profile.component";
import {ActionsComponent} from "../components/actions/actions.component";
import {CourcesComponent} from "../components/cources/cources.component";
import {MyWorksComponent} from "../components/my-works/my-works.component";
import {StillDepelopingComponent} from "../components/still-depeloping/still-depeloping.component";
import {OlympiadsComponent} from "../components/olympiads/olympiads.component";
import {RegisterOlympiadComponent} from "../components/register-olympiad/register-olympiad.component";
import {ProjectWorkComponent} from "../components/project-work/project-work.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'actions',
    component: ActionsComponent
  },
  {
    path: 'cources/:course',
    component: CourcesComponent
  },
  {
    path: 'my-works',
    component: MyWorksComponent
  },
  {
    path: 'still-developing',
    component: StillDepelopingComponent
  },
  {
    path: 'olympiads',
    component: OlympiadsComponent
  },
  {
    path: 'register-olympiad',
    component: RegisterOlympiadComponent
  },
  {
    path: 'project-work',
    component: ProjectWorkComponent
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
export class RootRoutingModule { }
