import { Component, OnInit } from '@angular/core';
import wines from '../../../assets/wines.json';

interface Wine {
  bottle: number;
  category: string;
  description: string;
  flight: number;
  glass: number;
  grape: string;
  local: boolean;
  name: string;
  region: string;
  togo: number;
  type: string;
  year: number;
}

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss']
})

export class WineComponent implements OnInit {

  flights: Array<{
    flight: string;
    price: number;
    wines: Array<Wine>;
  }> = [];

  constructor() {
    let index: number = 0;
    let category: string | null = null;
    wines.map(wine => {
      if (wine.category !== category) {
        index++;
        category = wine.category;
        this.flights.push({
          flight: category,
          price: wine.flight,
          wines: []
        });
      }
      this.flights[index - 1].wines.push(wine);
    });
  }
  ngOnInit(): void {
    console.log(this.flights);
  }

}
