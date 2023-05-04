import { Component, ViewChild } from '@angular/core';
import { IMentor } from '../shared/imentor';
import { FormGroup, FormControl } from '@angular/forms';
import { Mentor } from '../shared/mentor';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.css']
})
export class AngularFormsComponent {

  // for Templete Driven Form
  @ViewChild('f') form!: any; 
  mentor!: IMentor;

  onSubmit(f: any){
    console.log(this.form.value);
    console.log(f.value);
    this.mentor = f.value;
  }

  // Reactive Forms
  selectedMentor!: Mentor;

  mentorForm = new FormGroup({
    name: new FormControl(''),
    likeCount: new FormControl(''),
  });

  onSubmitReactive(){
    console.warn(this.mentorForm.value);
    const o: any = {};
    this.selectedMentor = Object.assign(o, this.mentorForm.value);
  }



}
