import { Component, OnInit } from '@angular/core';
import { ValueChange } from '../ValueChange';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
})
export class NumberInputComponent extends ValueChange implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
