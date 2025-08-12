import { Component } from '@angular/core';
import { WeatherSearch } from '../weather-search/weather-search';
import { CurrentWeather } from '../current-weather/current-weather';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';
import { WeatherDetails } from '../weather-details/weather-details';
import { containerAnimation } from '../../animations/weather.animations';

@Component({
  selector: 'app-weather-entry',
  imports: [
    WeatherSearch,
    CurrentWeather,
    WeatherDetails,
    LoadingSpinner,
  ],
  animations: [containerAnimation],
  templateUrl: './weather-entry.html',
  styleUrl: './weather-entry.scss'
})
export class WeatherEntry {

}
