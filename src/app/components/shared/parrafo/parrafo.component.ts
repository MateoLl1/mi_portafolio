import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parrafo',
  templateUrl: './parrafo.component.html',
  styleUrl: './parrafo.component.css'
})
export class ParrafoComponent {

  @Input() parrafo: string = '';

}
