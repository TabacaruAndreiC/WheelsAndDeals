import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Car } from '../../model/car';
import { CarsService } from '../../services/cars.service';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDetailResolverService implements Resolve<Car | null> { 

  constructor(private router: Router, private carsService: CarsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Car | null> | Promise<Car | null> | Car | null {
    const carId = +route.params['id'];
    return this.carsService.getCar(+carId).pipe(
      catchError(error=>{
        this.router.navigate(['/']);
        return of(null);
      })
    );
  }
}