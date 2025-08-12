import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { fadeInScale, pulseAnimation } from '../../animations/weather.animations';

@Component({
  selector: 'app-weather-card',
  imports: [LucideAngularModule],
  animations: [fadeInScale, pulseAnimation],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.scss',
})
export class WeatherCard {
  @Input() title!: string;
  @Input() value!: string | number;
  @Input() unit?: string;
  @Input() icon!: any;
  
  isHovered = false;
}
