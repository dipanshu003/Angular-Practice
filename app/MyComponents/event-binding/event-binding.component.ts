import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  count : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onCalling(){

    if(this.count == 0)
    {
      console.log("This is Calling...");
      this.count++;
    }

  }
  onImage(){
    console.log("This is Image Calling...");
  }

  onEvent(myevent : any)
  {
    console.log(myevent);
    console.log(myevent.target.value);
    
  }
}
