import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './MyComponents/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './MyComponents/property-binding/property-binding.component';
import { StyleBindingComponent } from './MyComponents/style-binding/style-binding.component';
import { ClassBindingComponent } from './MyComponents/class-binding/class-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
