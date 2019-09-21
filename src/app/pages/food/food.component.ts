import { Component, OnInit } from '@angular/core';
import menu from '../../../assets/menu-items.json';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  food = menu.Food;
  printing: boolean = false;
  constructor() {
    document.onkeydown = event => {
      const { ctrlKey, keyCode } = event;
      const combo = (ctrlKey && keyCode === 85);
      this.printing = (combo || this.printing) ? true : false;
    }
  }

  ngOnInit() {
  }

}
