import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  properties: Array<any> | undefined ;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('data/properties.json')
  }

}
