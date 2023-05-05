import { Injectable } from '@angular/core';
import { IMentor } from './imentor';
import { Mentor } from './mentor';
import { BehaviorSubject, Subject } from 'rxjs';

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
  selectedMentor$: Subject<IMentor> = new Subject();
  selectedMentorB$: BehaviorSubject<IMentor> = new BehaviorSubject<IMentor>(this.mentors[0]);

  constructor() { }

  getMentors(): Mentor[]{
    return this.mentors.slice();
  }

  getMentorByName(name: string): Mentor {
    let index: number = this.mentors.findIndex(m => m.name === name);
    return this.mentors[index];
  }

  selectMentorReactive(name : string){
    const selected = this.getMentorByName(name);
    this.selectedMentorB$.next(selected);
  }

  selectMentor(name : string){
    this.selectedMentor = this.getMentorByName(name);
  }

  likeMentor(mentor: IMentor){
    let index: number = this.mentors.findIndex(m => m.name === mentor.name);
    this.mentors[index].likeCount += 1;
  }




}
