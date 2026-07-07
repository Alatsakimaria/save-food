import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseBags } from './surprise-bags';

describe('SurpriseBags', () => {
  let component: SurpriseBags;
  let fixture: ComponentFixture<SurpriseBags>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurpriseBags],
    }).compileComponents();

    fixture = TestBed.createComponent(SurpriseBags);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
