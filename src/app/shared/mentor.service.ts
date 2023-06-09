import { Injectable } from '@angular/core';
import { IMentor } from './imentor';
import { Mentor } from './mentor';
import { BehaviorSubject, Subject, catchError, map, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http'

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

  constructor(private http: HttpClient) { }

  getMentors(): Mentor[]{
    // this.fetchMentors();
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

  // fetchMentors(){
  //   let url : string = 'http://localhost:8080/api/v1/mentors';

  //   this.http.get<Response>(url).pipe(
  //     map( response => response.data ),
  //     catchError(error => this.handleError(error))
  //   ).subscribe(
  //       data => {
  //         this.mentors = data;
  //         console.log(data);
  //       }
  //   );
  // }

  // handleError(error:any) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // client-side error
  //     errorMessage = `Error: ${error.error.message}`;
  //   } else {
  //     // server-side error
  //     errorMessage = error.error.message;
  //   }
  //   console.log(errorMessage);
  //   return throwError(() => {
  //       return errorMessage;
  //   });
  // }

}

// interface Response {
//   data: [];
// }
