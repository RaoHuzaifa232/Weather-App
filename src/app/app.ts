import { Component } from '@angular/core';
import { WeatherEntry } from './components/weather-entry/weather-entry';

@Component({
  selector: 'app-root',
  imports: [WeatherEntry],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'weather-app';
}
