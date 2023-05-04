import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  mentors: string[] = ['Ower', 'Matt', 'Sahin'];
  selectedMentor!: string;

  onSelectMentor(mentor: string){
    this.selectedMentor = mentor;
  }

  onLikeMentor(mentor: string){
    let index: number = this.mentors.findIndex(d => d === mentor);
    this.mentors[index] = `${mentor} + liked`;
  }

}
