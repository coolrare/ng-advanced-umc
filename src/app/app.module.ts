import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page2Component } from './page2/page2.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ColorComponent } from './utils/color/color.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { Login2Component } from './login2/login2.component';
import { PasswordComplexityValidator } from './password-complexity.directive';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    DashboardComponent,
    Page2Component,
    NotFoundComponent,
    ColorComponent,
    LoginComponent,
    LayoutComponent,
    Login2Component,
    PasswordComplexityValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PasswordComplexityValidator],
  bootstrap: [AppComponent]
})
export class AppModule { }
