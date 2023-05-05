import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IMentor } from 'src/app/shared/imentor';
import { MentorService } from 'src/app/shared/mentor.service';

@Component({
  selector: 'app-non-related',
  templateUrl: './non-related.component.html',
  styleUrls: ['./non-related.component.css']
})
export class NonRelatedComponent {
  mentors: string[] = ['Ower', 'Matt', 'Sahin'];
  selectedMentor?: IMentor;

  // Dependency Injection
  constructor(private service: MentorService,
              private router: Router){}


  onSelectMentor(mentor: string){
    this.service.selectMentor(mentor);
    this.router.navigate(['/interx']);
  }
}
