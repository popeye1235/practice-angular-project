import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'employee-list',
  template: `
  <h2>Employees</h2>
  <h3>{{errorMsg}}</h3>
  <ul *ngFor="let employee of employees">
    <li>{{ employee.name }}</li>
  </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees: any = [];
  public errorMsg: string | undefined;
  constructor(
    private _empService: EmployeeService
  ) { }

  ngOnInit(): void {
    this._empService.getEmployees().subscribe(data => this.employees = data, error => this.errorMsg = error);
  }

}
