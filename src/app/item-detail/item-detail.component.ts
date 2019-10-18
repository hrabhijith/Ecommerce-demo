import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Items } from '../item/item.model';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  id: number;
  inItems: Items;

  constructor(private activeRoute: ActivatedRoute, private itemServ: ItemService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.inItems = this.itemServ.getItemsById(this.id);
      }
    );
  }

}
