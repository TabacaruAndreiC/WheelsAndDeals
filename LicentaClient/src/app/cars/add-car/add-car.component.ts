import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { ICarBase } from '../../model/iCarBase';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  @ViewChild('Form')
    addCarForm!: NgForm;
    @ViewChild('formTabs')
    formTabs!: TabsetComponent; 
    State=1; // 1= sell 2=rent
    carTypes = ['Sedan', 'SUV', 'Coupe', 'Convertible', 'Wagon', 'Hatchback', 'Van', 'Truck', 'Minivan'];
    carView: ICarBase ={Id: 0, Brand:'', Model:'', Year:0, Km:0, Engine:'', Power:0, Fuel:'', Type:'', Price:0, State:0, Description:'', Available:'', Image:'' };
    
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
  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
