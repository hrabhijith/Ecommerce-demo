import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemImagesComponent } from './item-images.component';

describe('ItemImagesComponent', () => {
  let component: ItemImagesComponent;
  let fixture: ComponentFixture<ItemImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
