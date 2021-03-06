import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ColorComponent } from './utils/color/color.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './auth.guard';
import { Login2Component } from './login2/login2.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login2', component: Login2Component },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'utils',
        children: [
          { path: 'color/:type', component: ColorComponent }
        ]
      },
      { path: 'page1', component: Page1Component, canActivate: [AuthGuard] },
      { path: 'page2', component: Page2Component, canActivate: [AuthGuard] },
      { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
    ]
  },
  // { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
