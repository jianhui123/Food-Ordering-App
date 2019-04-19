import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SummaryComponent } from '../summary/summary.component';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  food = [];
  msg = ``;

  constructor(
    private foodservice: FoodService,
    private router: Router
  ) { }

  ngOnInit() {
    this.foodservice.foodlist();
    this.foodservice.food.subscribe(food => {
      this.food = food;
    });
  }

  confirm() {
    this.foodservice.food.next(this.food);
    for (let i = 0; i < this.food.length; i++) {
      if (!this.food[i].selected) {
        this.msg = `Please choose an option.`
      } else {
        this.router.navigateByUrl("/summary");
      }
    }
  }
}