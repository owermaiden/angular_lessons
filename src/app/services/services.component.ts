import { Component, OnInit } from '@angular/core';
import { IMentor } from '../shared/imentor';
import { MentorService } from '../shared/mentor.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{
  selectedMentor: IMentor | undefined;

  constructor(private mentorService: MentorService){}

  ngOnInit(): void {
      this.selectedMentor = this.mentorService.selectedMentor;
  }

}
