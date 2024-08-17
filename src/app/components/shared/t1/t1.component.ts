import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-t1',
  templateUrl: './t1.component.html',
  styleUrl: './t1.component.css'
})
export class T1Component {

  @Input() titulo: string = '';

}
