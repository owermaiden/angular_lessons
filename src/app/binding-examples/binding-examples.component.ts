import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-examples',
  templateUrl: './binding-examples.component.html',
  styleUrls: ['./binding-examples.component.css']
})
export class BindingExamplesComponent {
  example: string = 'This is String Interpolation';
  isDisabled: boolean = false;
  fontSizePx = 16;

  onClick(){
    this.example = 'This is Event Binding';
    this.isDisabled = true;
  }
}
