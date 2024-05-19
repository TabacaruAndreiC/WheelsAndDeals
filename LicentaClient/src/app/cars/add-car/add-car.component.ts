import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { ICarBase } from '../../model/iCarBase';
import { Car } from '../../model/car';
import { CarsService } from '../../services/cars.service';
import { AlertyfyService } from '../../services/alertify.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  addCarForm!: FormGroup;
  @ViewChild('formTabs')
  formTabs!: TabsetComponent; 
  State=1; // 1= sell 2=rent
  NextClicked: boolean = false;
  car =new Car();


  carTypes = ['Sedan', 'SUV', 'Coupe', 'Convertible', 'Wagon', 'Hatchback', 'Van', 'Truck', 'Minivan'];

  carView: ICarBase ={Id: 0, 
    Brand:'', 
    Model:'', 
    Year:0, 
    Km:0, 
    Engine:'', 
    Power:0, 
    Fuel:'', 
    Type:'', 
    Price:0, 
    State:1, 
    Description:'',
    Available:''};
    
  constructor(private fb: FormBuilder, private router:Router, private carsService:CarsService, private alertify: AlertyfyService){}

  ngOnInit() {
    this.CreateAddCarForm();
    this.carsService.getAllBrands().subscribe(data => console.log(data));
  }

  CreateAddCarForm(){
    this.addCarForm=this.fb.group({
      BasicInfo: this.fb.group({
        Brand: [null, Validators.required],
        Model: [null, Validators.required],
        Type: [null, Validators.required],
        Year: [null, Validators.required],
        Price: [null, Validators.required]
      }),
      DetailedInformation: this.fb.group({
        Km: [null, Validators.required],
        Engine: [null, Validators.required],
        Power: [null, Validators.required],
        Fuel: [null, Validators.required]
      }),
      OtherDetails: this.fb.group({
        State: [null, Validators.required],
        Description: [null, Validators.required],
        Available: [null, Validators.required]
      })
    });
  }
// #region <getter mettods>
  // #region <Form groups>
  get BasicInfo(){
    return this.addCarForm.controls['BasicInfo'] as FormGroup;
  }
  get DetailedInformation(){
    return this.addCarForm.controls['DetailedInformation'] as FormGroup;
  }
  get OtherDetails(){
    return this.addCarForm.controls['OtherDetails'] as FormGroup;
  }
  // #endregion

  // #region <Form Controls>
  get Brand(){
    return this.BasicInfo.controls['Brand'] as FormControl;
  }
  get Model(){
    return this.BasicInfo.controls['Model'] as FormControl;
  }
  get Type(){
    return this.BasicInfo.controls['Type'] as FormControl;
  }
  get Price(){
    return this.BasicInfo.controls['Price'] as FormControl;
  }
  get Year(){
    return this.BasicInfo.controls['Year'] as FormControl;
  }
  get Km(){
    return this.DetailedInformation.controls['Km'] as FormControl;
  }
  get Engine(){
    return this.DetailedInformation.controls['Engine'] as FormControl;
  }
  get Power(){
    return this.DetailedInformation.controls['Power'] as FormControl;
  }
  get Fuel(){
    return this.DetailedInformation.controls['Fuel'] as FormControl;
  }
  get CarState(){
    return this.OtherDetails.controls['State'] as FormControl;
  }
  get Description(){
    return this.OtherDetails.controls['Description'] as FormControl;
  }
  get Available(){
    return this.OtherDetails.controls['Available'] as FormControl;
  }
  get Image(){
    return this.OtherDetails.controls['Image'] as FormControl;
  }
  // #endregion
// #endregion

  onBack(){
    this.router.navigate(['/']);
  }
  onSubmit(Form: NgForm){
    this.NextClicked = true;
    if(this.validTabs()){
      this.mapCar();
      this.carsService.addCar(this.car);
      this.alertify.success('Car added successfully');
      console.log(this.addCarForm )
      if(this.State===2){
        this.router.navigate(['/rent-car']);
      }
      else{
        this.router.navigate(['/']);
      }
    }
    else{
      this.alertify.error('Invalid form');
    }
  }
  mapCar(): void{
    this.car.Id= this.carsService.newCarId();
    this.car.Price= this.Price.value;
    this.car.Brand= this.Brand.value;
    this.car.Model= this.Model.value;
    this.car.Type= this.Type.value;
    this.car.Year= this.Year.value;
    this.car.Km= this.Km.value;
    this.car.Engine= this.Engine.value;
    this.car.Power= this.Power.value;
    this.car.Fuel= this.Fuel.value;
    this.car.State= +this.State;
    this.car.Description= this.Description.value;
    this.car.Available= this.Available.value;
    this.car.PostedOn= new Date().toString();
  }

  validTabs(): boolean {
    if(this.BasicInfo.invalid){
      console.log('BasicInfo errors:', this.BasicInfo.errors);
      this.formTabs.tabs[0].active = true;
      return false;
    }
    if(this.DetailedInformation.invalid){
      console.log('DetailedInformation errors:', this.DetailedInformation.errors);
      this.formTabs.tabs[1].active = true;
      return false;
    }
    if(this.OtherDetails.invalid){
      console.log('OtherDetails errors:', this.OtherDetails.errors);
      this.formTabs.tabs[2].active = true;
      return false;
    }
    return true;
  }
  
  selectTab(tabId: number, IsCurentTabValid: boolean){ 
    this.NextClicked = true;
    if(IsCurentTabValid){
      this.formTabs.tabs[tabId].active = true;
      }
  }
  
}