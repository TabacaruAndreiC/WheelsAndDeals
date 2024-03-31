import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';
import { AlertyfyService } from '../../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authentificationService: AuthentificationService, private alertify: AlertyfyService, private router: Router) { } 

  ngOnInit() {
  }

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const token = this.authentificationService.authenticate(loginForm.value);
    if(token){
      localStorage.setItem('token', token.userName)
      this.alertify.success('Login successful');
      this.router.navigate(['/']);
    }
    else{
      this.alertify.error('Login failed');
    }
  }
}
