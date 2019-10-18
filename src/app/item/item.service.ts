import { Injectable } from '@angular/core';
import { Items } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Items[] = [
    new Items('Motorola g5', 'Motorola Moto G5 Android smartphone. Announced Feb 2017.',
    'https://5.imimg.com/data5/EH/IU/MY-13191810/moto-g5-plus-500x500.png', 0, ['good', 'bad', 'okok'], 1000),
    new Items('Motorola g5', 'Motorola Moto G5 Android smartphone. Announced Feb 2017.',
    'https://5.imimg.com/data5/EH/IU/MY-13191810/moto-g5-plus-500x500.png', 0, ['good', 'bad', 'okok'], 1000)
  ];

  constructor() { }

  onGetItems() {
    return this.items.slice();
  }

  getItemsById(id: number) {
    return this.items[id];
  }
}
