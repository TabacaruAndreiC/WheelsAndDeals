import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {map } from 'rxjs/operators';
import { ICar } from '../cars/ICar.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http:HttpClient) { }
   getAllCars (State:number):Observable<ICar[]> {
    return this.http.get<any>('data/cars.json').pipe(
      map(data =>{
        const propertiesArray: Array<ICar> = [];
        for(const id in data){
          if(data.hasOwnProperty(id)&& data[id].State === State){
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
