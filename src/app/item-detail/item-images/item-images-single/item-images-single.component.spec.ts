import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemImagesSingleComponent } from './item-images-single.component';

describe('ItemImagesSingleComponent', () => {
  let component: ItemImagesSingleComponent;
  let fixture: ComponentFixture<ItemImagesSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemImagesSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemImagesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
