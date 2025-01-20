import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
   <h3>Department List</h3>
   <ul class="items">
    <li (click)="onSelect(department)" *ngFor="let department of departments">
      <span class="badge">{{ department.id }}</span> {{ department. name }}
    </li>
   </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  public departments = [
    {"id": 1, "name": "Operations"},
    {"id": 2, "name": "Sales"},
    {"id": 3, "name": "Tech"},
    {"id": 4, "name": "Product"},
    {"id": 5, "name": "Logistics"},
    {"id": 6, "name": "Finance"}
  ]
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSelect(department: any) {
    this.router.navigate(['/departments', department?.id])
  }

}
