import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
  <h3>You selected department with id = {{ departmentId }}</h3>
  <button (click)="goPrevious()" class="button" [disabled]="isPreviousDisabled()">⬅️ Previous</button>
  <button (click)="goNext()" class="button" [disabled]="isNextDisabled()">Next ➡️</button>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
public departmentId: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id') as string); //have some drawback in snapshot
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') as string);
      this.departmentId = id;
    })
  }

  public goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId])
  }

  public goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId])
  }

  public isPreviousDisabled(): boolean {
    return this.departmentId <= 1;
  }

  public isNextDisabled(): boolean {
    return this.departmentId >= 6;
  }
}


