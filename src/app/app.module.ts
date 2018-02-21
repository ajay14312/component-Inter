import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TriangleComponent } from './triangle/triangle.component';
import { DonutComponent } from './donut/donut.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';


@NgModule({
  declarations: [
    AppComponent,
    TriangleComponent,
    DonutComponent,
    RectangleComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
