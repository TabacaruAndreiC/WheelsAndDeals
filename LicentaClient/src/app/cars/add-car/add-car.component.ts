import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  @ViewChild('Form') addCarForm: NgForm | undefined;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/']);
}
  onSubmit(Form: NgForm){
    console.log('Form Submitted');
    console.log(this.addCarForm);
  }
}
