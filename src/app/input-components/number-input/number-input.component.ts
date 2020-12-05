import { Component, Input, OnInit } from '@angular/core';
import { IDeviceAction } from 'src/app/interfaces/i-device';
import { ValueChange } from '../enum-input/ValueChange';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent extends ValueChange implements OnInit {
  
  @Input()
  changeAction?: IDeviceAction;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
