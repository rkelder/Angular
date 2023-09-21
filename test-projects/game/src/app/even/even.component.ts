import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
})
export class EvenComponent implements OnInit {
  // Number listens to input from the outside parent component.
  @Input()
  number: number = 0;

  constructor() {}

  ngOnInit() {}
}
