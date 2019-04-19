import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  food = new BehaviorSubject([])
  constructor(private http: HttpClient) { }
  foodlist() {
    this.http.get<any>('http://localhost:5000/list').toPromise().then(result => {
      this.food.next(result.data)
    })
  }
}
