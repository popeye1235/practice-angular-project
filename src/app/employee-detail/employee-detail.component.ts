import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'employee-detail',
  template: `
    <h2>Employee Details</h2>
    <h3>{{errorMsg}}</h3>
  <ul *ngFor="let employee of employees">
    <li>{{employee.id}} {{ employee.name }} - {{employee.age}}</li>
  </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees: any = [];
  public errorMsg: string | undefined;
  constructor(
    private _empService: EmployeeService
  ) { }

  ngOnInit(): void {
    this._empService.getEmployees().subscribe(data => this.employees = data,
                                              error => this.errorMsg = error
    );
  }

}
