import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../item.service';
import { Items } from '../item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Items[];

  constructor(private itemServ: ItemService) { }

  ngOnInit() {
    this.itemServ.onChangeItem.subscribe(
      (items: Items[]) => {
        this.items = items;
      }
    );
    this.items = this.itemServ.onGetItems();
  }

}
