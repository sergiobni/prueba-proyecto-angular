import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  foo = 'estp es una prueba';
  title = 'prueba-inicial-angular';
  user = {};
  isLogged: boolean | undefined | string = true;
  foo1: Array<number | boolean> = [1, true];
  foo2: (number | boolean)[] = [1, true, 1, 5];
  foo3: Record<string, number> = { edad: 50, saldo: 200 }; //record es tipo objeto

  cont = 0;

  constructor() {
    setInterval(() => {
      this.cont++;
    }, 1000);
    console.log('hola dentro del app component', this.foo);
    console.log(this.suma(1, 2));
    //viendo como las claves del objeto se pueden iterar
    const foo = { a: 3, b: 2, c: 5 };
  }

  ejercicioFactorial(a: number): number {
    let result: number = a;
    for (let i = 1; i < a; i++) {
      result *= i;
    }
    return result;
  }
  suma(a: number, b: number): number {
    return a + b;
  }
  // ejercicioMonedas(a: number):  {
  //divide la cantidad por el billete, guarda y el número y guarda el resto
  //hago un bucle que calcule la cantidad de unidades de moneda y guarde en un objeto el número total que contiene por tipo de moneda.
  //Que guarde el resto y
  //}

  //PRUEBAS CON ASINCRONIA
}
