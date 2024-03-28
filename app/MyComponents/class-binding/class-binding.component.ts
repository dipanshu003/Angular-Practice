import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  isError = true;
  isWarning = true;
  default = true;

  num = 2;
  myCssClass="danger";
  jsonObj=
  {
    success : this.isError,
    danger : !this.isError,
    warning : this.isWarning,
    default_spec : this.default
  }

  constructor() { }

  ngOnInit(): void {
  }

}
