import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {

  @Output() emitStartColorData = new EventEmitter();
  @Input() triangleData;

  constructor() { }

  ngOnInit() {
    this.emitStartColorData.emit('blue');
  }

  changeTriangleColor = () => {
    if (this.triangleData === 'red') {
      this.triangleData = 'blue';
      this.emitStartColorData.emit('blue');
    } else if (this.triangleData === 'blue') {
      this.triangleData = 'green';
      this.emitStartColorData.emit('green');
    } else if (this.triangleData === 'green') {
      this.triangleData = 'cyan';
      this.emitStartColorData.emit('cyan');
    } else if (this.triangleData === 'cyan') {
      this.triangleData = 'red';
      this.emitStartColorData.emit('red');
    }
  }

}
