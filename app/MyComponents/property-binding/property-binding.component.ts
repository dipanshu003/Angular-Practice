import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  defaultName : string = "Dipanshu Dhole";
  imgUrl : string = "../../assets/dip_img.jpeg";

  constructor() { }

  ngOnInit(): void {
  }

}
