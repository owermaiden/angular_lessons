import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent {

  // Variable types
  aString : string = 'This is just a string';
  aNumber : number = 1;
  aBoolean : boolean = false;

  stringArray : string[] = ['this', 'is', 'an', 'array'];
  numberArray : number[] = [10 , 20 , 30 ];

  obj: any = 100;
  obj2 : any = 'All types available';

  

  // functions
  justLikeMethodsInJava(params:any):number {
    
    const pi : number = 3.14; 

    let result: number = 0;
    result = 2 * pi * params;
    return result ;

  }

  arrayMethods(givenArray: any[]){

    givenArray.push(10);
    givenArray.length * 2;
    givenArray.forEach(n => n * 2);
    givenArray.findIndex(n => n === 10); // Object equality
    givenArray.find(n => n == 10);
    givenArray.slice(); // a copy of the array
    givenArray.splice(10, 1); // starting from element 10, remove only one element
     
  }

 
}
