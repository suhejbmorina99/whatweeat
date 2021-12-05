import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickedFoodComponent } from './picked-food.component';

describe('PickedFoodComponent', () => {
  let component: PickedFoodComponent;
  let fixture: ComponentFixture<PickedFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickedFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickedFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
