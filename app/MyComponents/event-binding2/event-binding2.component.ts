import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

  content:string="";
  result!:number ;

  num1!:number;
  num2!:number;
  


  constructor() { }

  ngOnInit(): void {
  }


  onName(myName:string){

    console.log(myName);

  }

  onMulti()
  {
    let n1=+this.num1;
    let n2=+this.num2;

    this.result = n1*n2;
    console.log(this.result);
    
  }

  

  // onAdd(num1:any,num2:any)
  // {
  //   let n1=+ num1;
  //   let n2=+ num2;
    
  //   this.result = n1+n2;
  //   console.log(this.result);
    
  // }
}
