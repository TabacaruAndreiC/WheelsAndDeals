import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../model/car';
import { ICarBase } from '../../model/iCarBase';
import { Subject } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit, OnDestroy {
  public carId!: number;
  car: Car | null = null; 
  private destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private router: Router, private carsService: CarsService) { }

  ngOnInit(){
    this.carId = +this.route.snapshot.params['id'];
      this.route.params.subscribe(params => {
        this.carId = +params['id'];
        this.carsService.getCar(this.carId).subscribe(
          (data: Car | null) => {
            if(data !== null){
              this.car = data;
            }
          },
          error => this.router.navigate(['/'])
        );
      }
      );
    }
    ngOnDestroy() {
      this.destroy$.next();
    this.destroy$.complete();
  }
}
