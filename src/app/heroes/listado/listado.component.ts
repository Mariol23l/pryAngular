import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iorman', 'thor', 'hulk'];
  hr: string = '';

  heroeborrado() {
    this.hr = this.heroes.shift() || '';
  }
  heroesrecuperado() {
    this.heroes.push(this.hr);
  }
}
