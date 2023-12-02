import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import {NgApexchartsModule} from "ng-apexcharts";
import { OlympiadComponent } from './olympiad/olympiad.component';
import { ProjectsAllComponent } from './projects-all/projects-all.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AdminComponent,
    OlympiadComponent,
    ProjectsAllComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgApexchartsModule
  ]
})
export class AdminModule { }
