import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Car } from '../../model/car';
import { CarsService } from '../../services/cars.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDetailResolverService implements Resolve<Car | null> { 

  constructor(private carsService: CarsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Car | null> | Promise<Car | null> | Car | null {
    const carId = +route.params['id'];
    if (isNaN(carId)) {
      return null;
    }
    return this.carsService.getCar(carId);
  }
}