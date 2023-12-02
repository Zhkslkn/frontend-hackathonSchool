import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RootRoutingModule} from './root-routing.module';
import {MainPageComponent} from './main-page/main-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SidebarComponent} from "../components/sidebar/sidebar.component";
import {ContentPageComponent} from "../components/content-page/content-page.component";
import {NgApexchartsModule} from "ng-apexcharts";
import {HeaderComponent} from "../components/header/header.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {StillDepelopingComponent} from "../components/still-depeloping/still-depeloping.component";
import {MyWorksComponent} from "../components/my-works/my-works.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MainPageComponent,
    DashboardComponent,
    SidebarComponent,
    ContentPageComponent,
    HeaderComponent,
    StillDepelopingComponent,
    MyWorksComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RootRoutingModule,
    NgApexchartsModule,
    MatExpansionModule
  ]
})
export class RootModule { }
