import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaThirstComponent } from './pizza-thirst.component';

describe('PizzaThirstComponent', () => {
  let component: PizzaThirstComponent;
  let fixture: ComponentFixture<PizzaThirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaThirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaThirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
