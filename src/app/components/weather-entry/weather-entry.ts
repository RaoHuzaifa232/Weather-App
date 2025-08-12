import { Component } from '@angular/core';
import { WeatherSearch } from '../weather-search/weather-search';
import { CurrentWeather } from '../current-weather/current-weather';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';
import { WeatherDetails } from '../weather-details/weather-details';

@Component({
  selector: 'app-weather-entry',
  imports: [
    WeatherSearch,
    CurrentWeather,
    WeatherDetails,
    LoadingSpinner,
  ],
  templateUrl: './weather-entry.html',
  styleUrl: './weather-entry.scss'
})
export class WeatherEntry {

}
