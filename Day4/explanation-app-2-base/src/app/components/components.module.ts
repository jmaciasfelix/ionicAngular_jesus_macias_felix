import { NgModule } from "@angular/core";
import { SayHelloComponent } from './say-hello/say-hello.component';

@NgModule({
    declarations: [SayHelloComponent],
    exports: [SayHelloComponent]
})
export class ComponentsModule { }
