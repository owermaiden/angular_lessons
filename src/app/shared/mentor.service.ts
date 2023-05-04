import { Injectable } from '@angular/core';
import { IMentor } from './imentor';
import { Mentor } from './mentor';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  mentors: IMentor[] = [
    {name: 'Ower', likeCount: 1},
    {name: 'Matt', likeCount: 2},
    {name: 'Sahin', likeCount: 1}
  ];

  selectedMentor?: IMentor;

  constructor() { }

  getMentors(): Mentor[]{
    return this.mentors.slice();
  }

  getMentorByName(name: string): Mentor {
    let index: number = this.mentors.findIndex(m => m.name === name);
    return this.mentors[index];
  }

  selectMentor(name : string){
    this.selectedMentor = this.getMentorByName(name);
  }




}
