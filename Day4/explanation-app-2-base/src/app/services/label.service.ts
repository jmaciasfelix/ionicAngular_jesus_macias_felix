import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LabelService {
    contador = 5;

    sayHello() {
        console.log('holaa');
    }
}
