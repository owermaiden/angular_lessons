import { Component, OnInit } from '@angular/core';
import { IMentor } from '../shared/imentor';
import { MentorService } from '../shared/mentor.service';

@Component({
  selector: 'app-inter',
  templateUrl: './inter.component.html',
  styleUrls: ['./inter.component.css']
})
export class InterComponent implements OnInit{
  selectedMentor: IMentor | undefined;

  constructor(private mentorService: MentorService){}

  ngOnInit(): void {
      this.selectedMentor = this.mentorService.selectedMentor;
  }

}
