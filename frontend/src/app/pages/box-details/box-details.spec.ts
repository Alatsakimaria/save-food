import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDetails } from './box-details';

describe('BoxDetails', () => {
  let component: BoxDetails;
  let fixture: ComponentFixture<BoxDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(BoxDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
