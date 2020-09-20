import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-say-hello',
    template: `
        <h1>Hola {{ nombre }}!</h1>
        <ng-content></ng-content>
    `
})
export class SayHelloComponent {
    @Input() nombre: string;
}