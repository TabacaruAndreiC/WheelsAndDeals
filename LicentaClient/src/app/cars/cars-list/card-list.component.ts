import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { ActivatedRoute } from '@angular/router';
import { ICarBase } from '../../model/iCarBase';



@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  State=1; // 1= sell 2=rent
  cars: ICarBase[] = [];
  Today = new Date();
  Brand='';
  SearchBrand='';
  SortbyParam='';
  SortDirection='asc';

  constructor(private route:ActivatedRoute, private carsService: CarsService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.State=2;
    }
    this.carsService.getAllCars(this.State).subscribe({
      next: data => {
        this.cars = data;
        console.log(data);
      },
      error: error => {
        console.log('error');
        console.log(error);
      }
    });
  }
  onSearchBrand(){ 
    this.SearchBrand=this.Brand;
  }
  onSearchBrandClear(){
    this.SearchBrand='';
    this.Brand='';
  }
  onSortDirection(){
    if(this.SortDirection==='asc'){
      this.SortDirection='desc';
    } else {
      this.SortDirection='asc';
    }
  }
}
