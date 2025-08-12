import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoadingService } from '../../services/loading';
import { loadingSpinner } from '../../animations/weather.animations';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  animations: [loadingSpinner],
  template: `
    @if (loadingService.loading()) {
    <div class="loading-overlay" @loadingSpinner>
      <div class="spinner-container">
        <div class="weather-spinner">
          <div class="cloud">
            <div class="cloud-part cloud-part-1"></div>
            <div class="cloud-part cloud-part-2"></div>
            <div class="cloud-part cloud-part-3"></div>
          </div>
          <div class="rain">
            <div class="drop drop-1"></div>
            <div class="drop drop-2"></div>
            <div class="drop drop-3"></div>
          </div>
        </div>
        <p class="loading-text">Loading weather data...</p>
      </div>
    </div>
    }
  `,
  styleUrl: './loading-spinner.scss'
})
export class LoadingSpinner {
  protected loadingService = inject(LoadingService);
}
