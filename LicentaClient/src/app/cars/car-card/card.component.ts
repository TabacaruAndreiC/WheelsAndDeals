import { Component, Input, OnInit } from '@angular/core';
import { ICar } from '../ICar.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  car!: ICar; 

  constructor() { }

  ngOnInit() {
  }

}
