import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherEntry } from './weather-entry';

describe('WeatherEntry', () => {
  let component: WeatherEntry;
  let fixture: ComponentFixture<WeatherEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherEntry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
