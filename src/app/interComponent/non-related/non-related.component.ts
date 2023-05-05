import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMentor } from 'src/app/shared/imentor';
import { MentorService } from 'src/app/shared/mentor.service';

@Component({
  selector: 'app-non-related',
  templateUrl: './non-related.component.html',
  styleUrls: ['./non-related.component.css']
})
export class NonRelatedComponent implements OnInit {
  // mentors: IMentor[] = [
  //   {name: 'Ower', likeCount: 1},
  //   {name: 'Matt', likeCount: 2},
  //   {name: 'Sahin', likeCount: 1}
  // ];
  mentors: IMentor[] = [];
  selectedMentor?: IMentor;

  // Dependency Injection
  constructor(private service: MentorService,
              private router: Router){}

  ngOnInit(): void {
      this.mentors = this.service.getMentors();
  }


  onSelectMentor(mentor: string){
    this.service.selectMentor(mentor);
    this.router.navigate(['/interx']);
  }
}
