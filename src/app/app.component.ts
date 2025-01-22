import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './services/enrollment.service';
import { RegistrationService } from './services/registration.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { passwordValidator } from './shared/password.validator';
// import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice-angular-project Sudip';
  public name = "Babumosai";
  public message: any;
  public topics = ["Angular", "React", "Vue"];
  public emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
  userModel = new User('Sudip', 'popeye@gmail.com', '7001065853', 'default', 'morning', true)
  topicHasError = true;
  submitted = false;
  isSubmitted = false;
  errorMsg = '';
  registrationForm: FormGroup | undefined;

  // get function for reactive form 
get userName() {
  return this.registrationForm?.get('userName');
}

get email() {
  return this.registrationForm?.get('email');
}

get alternateEmails() {
  return this.registrationForm?.get('alternateEmails') as FormArray;
}
 
addAlternateEmail() {
  this.alternateEmails.push(this.fb.control(''));
}


  // registrationForm = new FormGroup({
  //   userName: new FormControl('Sudip'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  // loadApiData() {
  //   this.registrationForm.setValue({
  //     userName: 'Viswamitra',
  //     password: 'Gayatri Mantra',
  //     confirmPassword: 'Gayatri Mantra',
  //     address: {
  //       city: 'Ayodhya',
  //       state: 'UP',
  //       postalCode: '123456'
  //     }
  //   });
// form partial data fetching
  //   this.registrationForm.patchValue({
  //     userName: 'Viswamitra', 
  //     password: 'Gayatri Mantra',
  //     confirmPassword: 'Gayatri Mantra',
  //   })
  // }

  constructor(private _enrollmentService: EnrollmentService,
    private fb: FormBuilder,
    private _registrationService: RegistrationService
  ) {}
  ngOnInit(): void {   
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([])
    }, {validator: passwordValidator});


    this.registrationForm?.get('subscribe')?.valueChanges.subscribe(checkedValue => {
      const email = this.registrationForm?.get('email');
      if(checkedValue) {
        email?.setValidators(Validators.required);
      }else {
        email?.clearValidators();
      }
      email?.updateValueAndValidity();
    })
  }

  handleChildEvent(data: string) {
    this.message = data;
  }

  validateTopic(value: any) {
    if(value === 'default') {
      this.topicHasError = true;
    }else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    console.log(this.userModel);
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel).subscribe((data: any) => console.log("success!", data),
      (error: any) => this.errorMsg = error.statusText
    ) 
    // console.log(userForm); 
    // pass userForm as a paramneter of this function and check logs
    
  }

  onSubmitReactiveForm() {
    this.isSubmitted = true;
    this._registrationService.register(this.registrationForm?.value).subscribe((data: any) => console.log("success!", data),
    (error: any) => this.errorMsg = error.statusText
  ) 
  }
}
