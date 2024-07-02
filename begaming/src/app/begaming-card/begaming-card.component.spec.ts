import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BegamingCardComponent } from './begaming-card.component';

describe('BegamingCardComponent', () => {
  let component: BegamingCardComponent;
  let fixture: ComponentFixture<BegamingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BegamingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BegamingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
