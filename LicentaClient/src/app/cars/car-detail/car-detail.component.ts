import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../model/car';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  public carId!: number;
  car: Car | null = null; 
  carPhotos: string[] = ["assets/images/bmw_x3.jpg",
                      "assets/images/bmw_x1.jpg",
                      "assets/images/bmw_x2.jpg",
  ];
  private destroy$ = new Subject<void>();


  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.carId = +this.route.snapshot.params['id'];
    this.route.data.subscribe((data: Data) => { 
      this.car = data['car'] as Car; 
      });
    }
    
}
