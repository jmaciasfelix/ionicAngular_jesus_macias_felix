// angular
import { Component, Input } from '@angular/core';

// interfaces
import { Car } from '../../interfaces';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent {
  @Input() readonly car: Car;
}
