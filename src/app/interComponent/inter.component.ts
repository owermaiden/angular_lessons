import { Component, OnInit } from '@angular/core';
import { IMentor } from '../shared/imentor';
import { MentorService } from '../shared/mentor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inter',
  templateUrl: './inter.component.html',
  styleUrls: ['./inter.component.css']
})
export class InterComponent implements OnInit{
  selectedMentor: IMentor | undefined;

  constructor(private mentorService: MentorService,
              private router: Router){}

  ngOnInit(): void {
      this.selectedMentor = this.mentorService.selectedMentor;
  }

  onLikeMentor(mentor: IMentor){
    this.mentorService.likeMentor(mentor);
    this.router.navigate(['inter']);
  }

}
