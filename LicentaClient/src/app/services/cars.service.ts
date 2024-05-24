import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http:HttpClient) { }
  getAllBrands():Observable<string[]>{
    return this.http.get<string[]>('http://localhost:5263/api/Brand');
  }

  getCar(id: number): Observable< Car | null> {
    return this.getAllCars().pipe(
      map(cars => {
        //throw new Error('Error');
        return cars.find(c => Number(c.Id) === id) || null;
      })
    );
  }

  getAllCars (State?:number):Observable<Car[]> {
    return this.http.get<any>('data/cars.json').pipe(
      map(data =>{
        const propertiesArray: Array<Car> = [];
        const localCars = JSON.parse(localStorage.getItem('newCar') || 'null');
        if(localCars){
          for(const car of localCars){ 
            if(State){
              if(car.State === State){
                propertiesArray.push(car);
              }
            } else {
              propertiesArray.push(car);
            }
          } 
        }
        for(const id in data){
          if(State){
            if(data.hasOwnProperty(id)&& data[id].State === State){
              propertiesArray.push(data[id]);
            }
          } else {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
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