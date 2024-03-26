import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { ICar } from '../ICar.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  State=1;
  cars: Array<ICar> = [];

  constructor(private route:ActivatedRoute, private carsService: CarsService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.State=2;
    }
    this.carsService.getAllCars(this.State).subscribe(
      data => {
        this.cars = data;
        console.log(data);
      }, error=>{
        console.log('error')
        console.log(error);
      }
    );
  }
}
