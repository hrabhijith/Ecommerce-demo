import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Items } from '../item/item.model';
import { ItemService } from '../item/item.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  id: number;
  inItems: Items;
  today: number = Date.now();

  constructor(private activeRoute: ActivatedRoute, private itemServ: ItemService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.inItems = this.itemServ.getItemsById(this.id);
      }
    );
  }

  onSubmitRate(form: NgForm) {
    const newrate = parseInt(form.value.rate, 10);
    this.itemServ.addRating(this.id, newrate);
    form.reset();
  }

  onSubmitReview(form: NgForm) {
    const newreview = form.value.review;
    this.itemServ.addReview(this.id, newreview);
    form.reset();
  }

}
