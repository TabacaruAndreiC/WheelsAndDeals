import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  public carId!: number;
  constructor(private route:ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.carId= Number(this.route.snapshot.params['id']);
  }

  onSelectNext(){
    this.carId += 1;
    this.router.navigate(['/cars',this.carId]);
  }

}
