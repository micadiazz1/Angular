import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BegamingHardwareComponent } from './begaming-hardware.component';

describe('BegamingHardwareComponent', () => {
  let component: BegamingHardwareComponent;
  let fixture: ComponentFixture<BegamingHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BegamingHardwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BegamingHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
