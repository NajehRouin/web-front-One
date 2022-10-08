import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { ListBComponent } from '../pages/bureaux/list-b/list-b.component';
import { ListDomaineComponent } from '../pages/domaines/list-domaine/list-domaine.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { ListTypeComponent } from '../pages/types/list-type/list-type.component';

import {
  ListUComponent
} from '../pages/users/list-u/list-u.component';




const routes: Routes = [
  {
    path: 'users',
    component: ListUComponent
  },
  {
    path:'bureaux',component:ListBComponent
  },
  {
    path:'types',component:ListTypeComponent
  },
  {
    path:'domaines',component:ListDomaineComponent
  },
  {
    path:'profile',component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
