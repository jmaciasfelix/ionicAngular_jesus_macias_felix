import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Fruit } from '../../models/fruit.model';

@Component({
    selector: 'app-fruit-card',
    templateUrl: './fruit-card.component.html',
    styleUrls: ['./fruit-card.component.scss']
})
export class FruitCardComponent {
    @Input() fruit: Fruit;
    @Input() sayHello: (name: string) => void;

    @Output() deleteFruit: EventEmitter<string> = new EventEmitter<string>();
    @Output() callFunction: EventEmitter<(str: string) => void> = new EventEmitter<(str: string) => void>();

    deletePressed(event: Event) {
        this.sayHello('Pepe');
        this.deleteFruit.emit(this.fruit.name);
        this.callFunction.emit((name: string) => console.log('Hola ' + name));
    }
}
