import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatListModule} from '@angular/material/list'; 
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from '../components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { ListBComponent } from '../pages/bureaux/list-b/list-b.component';
import { ListUComponent } from '../pages/users/list-u/list-u.component';
import { ListDomaineComponent } from '../pages/domaines/list-domaine/list-domaine.component';
import { ListTypeComponent } from '../pages/types/list-type/list-type.component';
import {MatStepperModule} from '@angular/material/stepper';
import { AddUComponent } from '../pages/users/add-u/add-u.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { AddDomaineComponent } from '../pages/domaines/add-domaine/add-domaine.component';
import { AddBComponent } from '../pages/bureaux/add-b/add-b.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { AddTypeComponent } from '../pages/types/add-type/add-type.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    ListBComponent,
    ListUComponent,
    ListDomaineComponent,
    ListTypeComponent,
    AddUComponent,
    AddDomaineComponent,
    AddBComponent,
    ProfileComponent,
    AddTypeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatStepperModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
