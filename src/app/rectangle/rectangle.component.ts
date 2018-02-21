import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  @Input() squareData;
  @Output() emitRectangleColor = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  changeRectangleColor = () => {
    if (this.squareData === 'red') {
      this.squareData = 'blue';
      this.emitRectangleColor.emit('blue');
    } else if (this.squareData === 'blue') {
      this.squareData = 'green';
      this.emitRectangleColor.emit('green');
    } else if (this.squareData === 'green') {
      this.squareData = 'cyan';
      this.emitRectangleColor.emit('cyan');
    } else if (this.squareData === 'cyan') {
      this.squareData = 'red';
      this.emitRectangleColor.emit('red');
    }
  }

}
