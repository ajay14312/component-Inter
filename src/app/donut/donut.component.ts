import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  @Input() donutData

  constructor() { }

  ngOnInit() {
  }

}
