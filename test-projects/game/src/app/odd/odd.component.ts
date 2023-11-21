import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'],
})
export class OddComponent implements OnInit {
  // Number listens to input from the outside parent component.
  @Input()
  number: number = 0;

  constructor() {}

  ngOnInit() {}
}
