import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  food = []
  totalprice = 0;
  constructor(private foodservice: FoodService, private router: Router) { }

  ngOnInit() {
    this.foodservice.food.subscribe(food => {
      this.food = food;
      this.calculatetotal();
    })
  }
  calculatetotal() {
    for (let i = 0; i < this.food.length; i++) {
      if (this.food[i].selected) {
        this.totalprice += this.food[i].price;
      }
    }
  }
  back() {
    this.router.navigateByUrl("/");
  }
}