import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
   <h3>Department List</h3>
   <ul class="items">
    <li (click)="onSelect(department)" *ngFor="let department of departments" [class.selected]="isSelected(department)">
      <span class="badge">{{ department.id }}</span> {{ department. name }}
    </li>
   </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {
public selectedId: any;
  public departments = [
    {"id": 1, "name": "Operations"},
    {"id": 2, "name": "Sales"},
    {"id": 3, "name": "Tech"},
    {"id": 4, "name": "Product"},
    {"id": 5, "name": "Logistics"},
    {"id": 6, "name": "Finance"}
  ]
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => {
          let id = parseInt(params.get('id') as string);
          this.selectedId = id;
        })
  }

  onSelect(department: any) {
    // this.router.navigate(['/departments', department?.id])
    // this thing in the above sometimes can be redundent 
    this.router.navigate([department.id], {relativeTo: this.route})
  }

  isSelected(department: any) {
    return department.id === this.selectedId;
  }
}
