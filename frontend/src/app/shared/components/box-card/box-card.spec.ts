import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCard } from './box-card';

describe('BoxCard', () => {
  let component: BoxCard;
  let fixture: ComponentFixture<BoxCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxCard],
    }).compileComponents();

    fixture = TestBed.createComponent(BoxCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
