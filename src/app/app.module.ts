import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from "./auth/auth.module";
import {ProfileComponent} from './components/profile/profile.component';
import {ActionsComponent} from './components/actions/actions.component';
import {CourcesComponent} from './components/cources/cources.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {JwtModule} from "@auth0/angular-jwt";
import {yourTokenGetterFunction} from "./shared/config.model";
import {ReactiveFormsModule} from "@angular/forms";
import { OlympiadsComponent } from './components/olympiads/olympiads.component';
import { RegisterOlympiadComponent } from './components/register-olympiad/register-olympiad.component';
import { ProjectWorkComponent } from './components/project-work/project-work.component';
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ActionsComponent,
    CourcesComponent,
    OlympiadsComponent,
    RegisterOlympiadComponent,
    ProjectWorkComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AuthModule,
        MatExpansionModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: yourTokenGetterFunction,
                allowedDomains: ["localhost:5000"],
                disallowedRoutes: ["localhost:4020/admin/dashboard"],
            },
        }),
        ReactiveFormsModule,
        MatTabsModule
    ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
