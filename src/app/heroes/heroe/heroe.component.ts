import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'IronMan';
  edad: number = 10;
  datos(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'spiderman';
  }
  cambiarEdad(): void {
    this.edad = 20;
  }
}
