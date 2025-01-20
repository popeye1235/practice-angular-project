import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
  <h3>You selected department with id = {{ departmentId }}</h3>
  <p>
    <button (click)="showOverview()">Overview</button>
    <button (click)="showContact()">Contact</button>
  </p>
  <router-outlet></router-outlet>
  <p>
  <button (click)="goPrevious()" class="button" [disabled]="isPreviousDisabled()">⬅️ Previous</button>
  <button (click)="goNext()" class="button" [disabled]="isNextDisabled()">Next ➡️</button>
  </p>
  <div>
    <button (click)="gotoDepartments()">Back</button>
  </div>
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

  public gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {id: selectedId, test: 'testvalue'}]);
    // same goes for this above line
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route})
  }

  public showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route})
  }

  public showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route})
  }
}


