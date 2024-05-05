import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../model/user';
import { AlertyfyService } from '../../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  user!: User;
  userSubmitted: boolean = true;

  constructor(private fb: FormBuilder, private userService: UserServiceService, private alertify:AlertyfyService, private router:Router) { }

  ngOnInit() {
    this.createRegistrationForm();
}

createRegistrationForm() {
  this.registrationForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(8)]],
    confirmPassword: [null, [Validators.required]],
    mobile: [null, [Validators.required, Validators.minLength(10)]],
  }, { validators: this.passwordMatchingValidator });
}

  passwordMatchingValidator(control: AbstractControl): Validators | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notMatched: true };
  }
//#region Getters
 
  get firstName () {
    return this.registrationForm.get('firstName')as FormControl;
  }

  get lastName() {
    return this.registrationForm.get('lastName')as FormControl;
  }

  get email() {
    return this.registrationForm.get('email')as FormControl;
  }

  get password() {
    return this.registrationForm.get('password')as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword')as FormControl;
  }

  get mobile() {
    return this.registrationForm.get('mobile')as FormControl;
  }
//#endregion

  onSubmit() {
    console.log(this.registrationForm);
    this.userSubmitted = true;
    if(this.registrationForm.valid) {
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertify.success('Account created successfully, please log in');
      this.router.navigate(['/login']);
    }
    else {
      this.alertify.error('Registration failed');
    }
  }
  userData(): User{
    return this.user = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }
}
