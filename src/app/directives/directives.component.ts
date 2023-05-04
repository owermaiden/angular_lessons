import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  isDisabled: boolean = false;
  mentors: string[] = ['Ower', 'Matt', 'Sahin'];


  onClick(){
    this.isDisabled = !this.isDisabled;
  }
}
