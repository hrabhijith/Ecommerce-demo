import { Component, OnInit, Input } from '@angular/core';
import { Items } from 'src/app/item/item.model';

@Component({
  selector: 'app-item-images',
  templateUrl: './item-images.component.html',
  styleUrls: ['./item-images.component.css']
})
export class ItemImagesComponent implements OnInit {
  @Input() items1: Items;

  constructor() { }

  ngOnInit() {
  }

  urlChange(newUrl: string) {
    this.items1.imagePath = newUrl;
  }

}
