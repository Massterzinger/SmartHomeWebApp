import { Component, Input, OnInit } from '@angular/core';
import { ValueChange } from 'src/app/input-components/enum-input/ValueChange';
import { IDeviceAction } from 'src/app/interfaces/i-device';

@Component({
  selector: 'app-device-action',
  templateUrl: './device-action.component.html',
  styleUrls: ['./device-action.component.scss']
})
export class DeviceActionComponent extends ValueChange implements OnInit {

  @Input()
  changeAction?: IDeviceAction;

  @Input()
  valueType?: string;

  

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  log(smth: any){
    console.log(smth);
    this.valueChanged?.next(smth);
  }
}
