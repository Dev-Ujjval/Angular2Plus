import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { RouterModule } from '@angular/router';

import { PagesRoutes as routes } from './pages.routes';
import { ResourcesComponent } from './components/resources/resources.component';
import { UsersComponent } from './components/users/users.component';

import { TabsModule } from 'ngx-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [DashboardComponent, ResourcesComponent, UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TabsModule.forRoot(),
    NgxDatatableModule,
    ModalModule ]
})
export class AdminModule { }
