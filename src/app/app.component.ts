import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  triangleData = '';
  circleData = '';
  squareData = '';
  donutData = '';

  startColor = '';

  changeChildCompColor = () => {
    if (this.startColor === 'blue') {
      this.triangleData = 'red';this.circleData = 'green';this.squareData = 'blue';this.donutData = 'cyan';this.startColor = 'red';
    } else if (this.startColor === 'red') {
      this.triangleData = 'green';this.circleData = 'red';this.squareData = 'cyan';this.donutData = 'blue';this.startColor = 'green';
    } else if (this.startColor === 'green') {
      this.triangleData = 'cyan';this.circleData = 'blue';this.squareData = 'green';this.donutData = 'red';this.startColor = 'cyan';
    } else if (this.startColor === 'cyan') {
      this.triangleData = 'blue';this.circleData = 'cyan';this.squareData = 'red';this.donutData = 'green';this.startColor = 'blue';
    }
  }

  emitStartColorData = (event) => {
    this.triangleData = this.startColor = event;
    if (this.startColor === 'blue') {
      this.circleData = 'red';this.squareData = 'cyan';this.donutData = 'green';
    } else if (this.startColor === 'red') {
      this.circleData = 'green';this.squareData = 'blue';this.donutData = 'cyan';
    } else if (this.startColor === 'green') {
      this.circleData = 'cyan';this.squareData = 'red';this.donutData = 'blue';
    } else if (this.startColor === 'cyan') {
      this.circleData = 'blue';this.squareData = 'green';this.donutData = 'red';
    }
    // if (this.startColor === 'blue') {
    //   this.circleData = 'green';
    //   this.squareData = 'red';
    //   this.donutData = 'cyan';
    // } else if (this.startColor === 'red') {
    //   this.circleData = 'green';
    //   this.squareData = 'cyan';
    //   this.donutData = 'blue';
    // } else if (this.startColor === 'green') {
    //   this.circleData = 'blue';
    //   this.squareData = 'cyan';
    //   this.donutData = 'red';
    // } else if (this.startColor === 'cyan') {
    //   this.circleData = 'blue';
    //   this.squareData = 'red';
    //   this.donutData = 'green';
    // }
  }

  emitRectangleColor = (event) => {
    this.squareData = event;
    if (this.squareData === 'blue') {
      this.circleData = 'cyan';
      this.triangleData = this.startColor = 'green';
      this.donutData = 'red';
    } else if (this.squareData === 'red') {
      this.circleData = 'blue';
      this.triangleData = this.startColor ='green';
      this.donutData = 'cyan';
    } else if (this.squareData === 'green') {
      this.circleData = 'red';
      this.triangleData = this.startColor ='cyan';
      this.donutData = 'blue';
    } else if (this.squareData === 'cyan') {
      this.circleData = 'green';
      this.triangleData = this.startColor ='blue';
      this.donutData = 'red';
    }
  }
}
