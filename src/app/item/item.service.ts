import { Injectable } from '@angular/core';
import { Items } from './item.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  sum = 0;

  onChangeItem: Subject<Items[]> = new Subject<Items[]>();

  items: Items[] = [
    new Items('Motorola g5', 'Motorola Moto G5 Android smartphone. Announced Feb 2017.',
      'https://5.imimg.com/data5/EH/IU/MY-13191810/moto-g5-plus-500x500.png',
      3, ['good', 'bad', 'okok'], 1000, 3, [3, 5, 3], 3.3,
      ['https://fscl01.fonpit.de/userfiles/6727621/image/2017/lenovo-moto-g5/AndroidPIT-lenovo-moto-g5-1120-w810h462.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs5vZtDVm21sb-dInaZ-7qJXJCqNKzDTc50UO3-G97A6zGNf5k',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREu8RL-q4hMdHZOu9rSRHLxFCVuRT7yvOHJrKlFmrReO0iWqX0',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOU0ZGLS85pB9_-b692rHeuY1siTxlalWlaybOuNJhbZJMlKNQ',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR1g_Ee8u3W_6o2oBZipC3L6qsDBb5jD9Dde9qMA1BNDXbFzgL']),


    new Items('Lenovo Note', 'Lenovo Note Android smartphone. Announced Feb 2017.',
      'https://5.imimg.com/data5/EH/IU/MY-13191810/moto-g5-plus-500x500.png',
      3, ['good', 'bad', 'okok'],
      1000, 3, [3, 5, 3], 3.3,
      ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCOzYIiFCprmh6iSHNVHlN-ZHjt8uWrhlVvbDOa1UfN8YbjNql',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXDlbh9lcGvrtN5kHpSraEhIPIHIEakJZ5PgPWLQT3cNyjiAQj'])
  ];

  constructor() { }

  onGetItems() {
    return this.items.slice();
  }

  getItemsById(id: number) {
    return this.items[id];
  }

  addRating(index: number, newRate: number) {
    this.items[index].ratings.push(newRate);
    this.items[index].ratingCounter++;

    this.sum = 0;

    for (const rate of this.items[index].ratings) {
      this.sum = this.sum + rate;
    }
    this.items[index].avg = parseFloat((this.sum / this.items[index].ratingCounter).toFixed(1));
    this.onChangeItem.next(this.items.slice());
  }

  addReview(index: number, newReview: string) {
    this.items[index].reviews.push(newReview);
    this.items[index].reviewCounter++;
    this.onChangeItem.next(this.items.slice());
  }
}
