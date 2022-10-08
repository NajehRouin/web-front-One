import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  LoginComponent
} from './components/login/login.component';
import {
  DashboardComponent
} from './dashboard/dashboard.component';
import {
  AuthguardService
} from './Guards/authguard.service';
import {
  LayoutComponent
} from './pages/layout/layout.component';


const routes: Routes = [{
    path: '',
    component: LayoutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthguardService],
    data: {
      roles: ["admin"]
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
