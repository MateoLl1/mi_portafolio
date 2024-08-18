import { Component, Input } from '@angular/core';
import { MiProyect } from '../../../interfaces/proyecto';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {

  @Input() project?:MiProyect

}
