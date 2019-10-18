import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { HeadComponent } from './head/head.component';
import { ItemSingleComponent } from './item/item-list/item-single/item-single.component';

import { ItemService } from './item/item.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { FormsModule } from '@angular/forms';
import { ItemImagesComponent } from './item-detail/item-images/item-images.component';
import { ItemImagesSingleComponent } from './item-detail/item-images/item-images-single/item-images-single.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemListComponent,
    ItemSingleComponent,
    ItemDetailComponent,
    HeadComponent,
    ItemImagesComponent,
    ItemImagesSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
