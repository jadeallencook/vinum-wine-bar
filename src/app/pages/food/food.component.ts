import { Component, OnInit } from '@angular/core';
import food from '../../../assets/food.json';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  food = food;
  constructor() {
  }

  ngOnInit() {
  }

}
