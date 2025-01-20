import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
  <h2>
    Welcome {{name}}
  </h2>


  `,
  styles: [``]
})
export class TestComponent implements OnInit {
@Input() public parentData: any;
// alternate way to write input decorator
@Input('parentData') public codename: any;
@Output() public childEvent = new EventEmitter();
public name = "Sudip Mishra";
public myId = "testId";
public isDisabled = false;
public successClass = "text-success"
public hasError = true;
public isSpecial = true;
public messageClasses = {
  "text-success": !this.hasError,
  "text-danger": this.hasError,
  "text-special": this.isSpecial
}
public highlightColor = "orange";
public titleStyles = {
  color: "blue",
  fontStyle: "italic",
  fontSize: "20px"
}
public greeting = "";
public displayName = false;
public color = "purple";
public colorArr = ["red", "green", "blue", "pink"]
public messagePipe = "Welcome babumosai in this project";
public object = {
  "firstName" : 'Sudip',
  "lastname" : 'Mishra'
}
public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

  public greetUser() {
    return "Welcome " + this.name;
  }

  public onClick(event: any) {
    console.log(event);
    this.greeting = event.type;
  }

  public logMessage(value: any) {
    console.log(value)
  }

  public fireEvent() {
    this.childEvent.emit('Hey Babumosai! How are you?')
  }

}
