import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BegamingCartComponent } from './begaming-cart.component';

describe('BegamingCartComponent', () => {
  let component: BegamingCartComponent;
  let fixture: ComponentFixture<BegamingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BegamingCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BegamingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
