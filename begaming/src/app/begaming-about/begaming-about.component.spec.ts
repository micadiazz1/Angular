import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BegamingAboutComponent } from './begaming-about.component';

describe('BegamingAboutComponent', () => {
  let component: BegamingAboutComponent;
  let fixture: ComponentFixture<BegamingAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BegamingAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BegamingAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
