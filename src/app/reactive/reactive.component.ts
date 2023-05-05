import { Component, OnInit } from '@angular/core';
import { IMentor } from '../shared/imentor';
import { MentorService } from '../shared/mentor.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit{
  mentors: IMentor[] = [];
  selectedMentor?: IMentor;

  // Dependency Injection
  constructor(private service: MentorService){}

  ngOnInit(): void {
      // this.selectedMentor = this.service.selectedMentor;
      this.mentors = this.service.getMentors();
      this.service.selectedMentor$.subscribe(
        res => this.selectedMentor = res
      );
  }


  onSelectMentor(mentor: string){
    this.service.selectMentor(mentor);
  }

  onLikeMentor(mentor: IMentor){
    this.service.likeMentor(mentor);
  }
}
