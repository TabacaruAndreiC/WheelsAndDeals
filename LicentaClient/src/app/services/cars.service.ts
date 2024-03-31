import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ICarBase } from '../model/iCarBase';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http:HttpClient) { }
   getAllCars (State:number):Observable<ICarBase[]> {
    return this.http.get<any>('data/cars.json').pipe(
      map(data =>{
        const propertiesArray: Array<ICarBase> = [];
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
