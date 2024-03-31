import { Component, Input, OnInit } from '@angular/core';
import { ICarBase } from '../../model/iCarBase';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  car!: ICarBase; 
  @Input()
  hideIcons!: boolean;

  constructor() { }

  ngOnInit() {
  }

}
