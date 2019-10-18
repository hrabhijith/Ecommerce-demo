import { Component, OnInit, Input } from '@angular/core';
import { Items } from '../../item.model';

@Component({
  selector: 'app-item-single',
  templateUrl: './item-single.component.html',
  styleUrls: ['./item-single.component.css']
})
export class ItemSingleComponent implements OnInit {
  @Input() items1: Items;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
