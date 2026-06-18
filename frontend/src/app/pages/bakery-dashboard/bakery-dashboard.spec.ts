import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryDashboard } from './bakery-dashboard';

describe('BakeryDashboard', () => {
  let component: BakeryDashboard;
  let fixture: ComponentFixture<BakeryDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BakeryDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(BakeryDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
