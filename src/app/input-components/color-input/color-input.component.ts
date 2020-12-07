import { Component, Input, OnInit } from '@angular/core';
import { ValueChange } from '../ValueChange';

@Component({
  selector: 'app-color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.scss']
})
export class ColorInputComponent extends ValueChange implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
