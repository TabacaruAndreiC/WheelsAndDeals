import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ICarBase } from '../model/iCarBase';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http:HttpClient) { }
   getAllCars (State:number):Observable<ICarBase[]> {
    return this.http.get<any>('data/cars.json').pipe(
      map(data =>{
        const propertiesArray: Array<ICarBase> = [];
        const localCars = JSON.parse(localStorage.getItem('newCar') || 'null');
        if(localCars){
          for(const id in localCars){
            if(localCars.hasOwnProperty(id) && localCars[id].State === State){
              propertiesArray.push(localCars[id]);
            }
          }
        }
        for(const id in data){
          if(data.hasOwnProperty(id)&& data[id].State === State){
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
    return this.http.get<ICarBase[]>('data/cars.json');
  }
  addCar(car: Car){
    let newCar = [car];
    if(localStorage.getItem('newCar')){
      newCar = [car, ...JSON.parse(localStorage.getItem('newCar') || '[]')];
    }
    localStorage.setItem('newCar', JSON.stringify(newCar));
  }
  newCarId(){
    if(localStorage.getItem('carId')){
      localStorage.setItem('carId', String(+localStorage.getItem('carId')! + 1));
      return +localStorage.getItem('carId')!;
    }else{
      localStorage.setItem('carId', '101');
      return 101;
    }
  }
}
