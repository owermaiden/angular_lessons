import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { IMentor } from 'src/app/shared/imentor';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent {

  constructor(@Inject(DOCUMENT) private document: Document){}

  // Variable types
  public aString : string = 'This is just a string';
  private aNumber : number = 1;
  aBoolean : boolean = false;
  obj: any = 100;
  obj2 : any = 'All types available';

  stringArray : string[] = ['this', 'is', 'an', 'array'];
  numberArray : number[] = [10 , 20 , 30 ];
  anyArray : any[] = [10, 'string']; // Any means =>  without typescript


  // functions
  justLikeMethodsInJava(params:any):number {
    
    const pi : number = 3.14; 

    let result: number = 0;
    result = 2 * pi * params;
    return result ;

  }

  // String Methods are very close to Java 
  stringMethods(givenString: string){

    givenString.toLowerCase();
    givenString.split(',');
    givenString.trim();
    givenString.substring(1,5);
    givenString.indexOf('a');

    let concatination: string = `${this.aString} works in the ${this.aNumber} department.`; 
    concatination.charAt(0);
    concatination.length;
    
  }

  // Array => There is no other data structure like array & arraylist... Just Array
  arrayMethods(givenArray: any[]){

    givenArray.push(10);
    givenArray.pop()
    givenArray.length * 2;
    givenArray.forEach(n => n * 2);
    givenArray.findIndex(n => n === 10); // Object equality
    givenArray.find(n => n == 10);
    givenArray.slice(); // a copy of the array
    givenArray.splice(10, 1); // starting from element 10, remove only one element
     
  }

  // Loops
  loopsInTypescript(){

    // for Loop
    for (let i = 0; i < 3; i++) {
      console.log ("Block statement execution no." + i);
    }

    // forEach Loop
    let arr = [10, 20, 30, 40];
    for (var val of arr) {
      console.log(val); // prints values: 10, 20, 30, 40
    }

    // While Loop
    let i: number = 2;
    while (i < 4) {
        console.log( "Block statement execution no." + i )
        i++;
    }

    //do-while Loop
    let x: number = 2;
    do {
        console.log("Block statement execution no." + x )
        x++;
    } while ( i < 4)


  }

  // If-Else Statement
  ifElseTypeScript(){
    let x: number = 10, y = 20;

    if (x > y) {
        console.log('x is greater than y.');
    } else if (x < y){
        console.log('x is less than y.'); 
    } else if (x == y) {
        console.log('x is equal to y');
    }
  }

  // Switch-Case
  switchCaseTypeScript(){
    let x = 10, y = 5;
    switch (x-y) {
        case 0:
            console.log("Result: 0");
            break;
        case 5:
            console.log("Result: 5");
            break;
        case 10:
            console.log("Result: 10");
            break;
    }
  }

  navigateToTypeScript(){
    this.document.location.href = 'https://www.tutorialsteacher.com/typescript';
  }

 
}


// class example
class Employee {
  public empCode?: string;
  empName?: string; // public
}

let emp = new Employee();
emp.empCode = '123';
emp.empName = "Swati";

// Object from a Class
let mentor: Mentor = new Mentor('Ower', 1);

// JavaScript Object Notation (JSON)
let mentor2 : IMentor = { name: 'Ower', likeCount: 1 };
