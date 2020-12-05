import { Component, Input, OnInit } from '@angular/core';
import { IDeviceAction } from 'src/app/interfaces/i-device';
import { ValueChange } from '../enum-input/ValueChange';

@Component({
  selector: 'app-color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.scss']
})
export class ColorInputComponent extends ValueChange implements OnInit {

  @Input()
  changeAction?: IDeviceAction;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
