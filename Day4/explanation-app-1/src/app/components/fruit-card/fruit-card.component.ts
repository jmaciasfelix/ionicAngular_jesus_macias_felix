import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fruit } from '../../models/fruit.model';

@Component({
  selector: 'app-fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrls: ['./fruit-card.component.scss'],
})
export class FruitCardComponent {

  @Input() fruit: Fruit;

  @Output() deletePressed = new EventEmitter<void>();

  constructor() {

  }

  public emitDeletePressed(): void {

    this.deletePressed.emit();
  }
}
