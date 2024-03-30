import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './MyComponents/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './MyComponents/property-binding/property-binding.component';
import { StyleBindingComponent } from './MyComponents/style-binding/style-binding.component';
import { ClassBindingComponent } from './MyComponents/class-binding/class-binding.component';
import { EventBindingComponent } from './MyComponents/event-binding/event-binding.component';
import { EventBinding2Component } from './MyComponents/event-binding2/event-binding2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    EventBinding2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
