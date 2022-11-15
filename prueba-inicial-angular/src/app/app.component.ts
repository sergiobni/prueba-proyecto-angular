import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prueba-inicial-angular';
  isLogged: boolean | undefined | string = true;
  foo: Array<number | boolean> = [1, true];
  foo2: (number | boolean)[] = [1, true, 1, 5];
  foo3: Record<string, number> = { edad: 50, saldo: 200 }; //record es tipo objeto

  constructor() {
    console.log('hola dentro del app component');
    this.foo.push(7);
  }
}
