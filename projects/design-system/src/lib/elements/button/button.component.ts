import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label: string = 'Hello World';
  @Output() onClick = new EventEmitter<void>();
  @Input() style = {
    color: 'black',
    backgroundColor: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: '1px solid black',
    cursor: 'pointer',
  };
}
