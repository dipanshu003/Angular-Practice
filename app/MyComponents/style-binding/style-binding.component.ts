import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  rating:number=33;
  myColor1: string = "blue";
  bgColor: string = "orange";
  myColor2: string = "red";
  myStyle: string = "color:green; font-family:Varadana; background-color: red; text-align:center;";

  JsonObject = {

    color: "violet",
    fontFamily: "Varadana",
    "background-color": "purple",
    "text-align": "right"

  }

  constructor() { }

  ngOnInit(): void {
  }

}
