import { Component, OnInit } from '@angular/core';
import menu from '../../../assets/menu-items.json';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  food = menu.Drinks;
  constructor() { }

  ngOnInit() {
  }

}