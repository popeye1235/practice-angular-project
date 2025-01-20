import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice-angular-project Sudip';
  public name = "Babumosai";
  public message: any;

  handleChildEvent(data: string) {
    this.message = data;
  }
}
