import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/departments', pathMatch: 'full'},
  {path: 'departments', component: DepartmentListComponent},
  {
    path: 'departments/:id',
     component: DepartmentDetailComponent,
     children: [
      {path: 'overview', component: DepartmentOverviewComponent},
      {path: 'contact', component: DepartmentContactComponent}
    ]
  },
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employeeDetails', component: EmployeeDetailComponent},
  {path: '**', component: PageNotFoundComponent}
  // this is wildcard route and has to be written in the last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, EmployeeListComponent, EmployeeDetailComponent, DepartmentDetailComponent, PageNotFoundComponent, DepartmentOverviewComponent, DepartmentContactComponent]
