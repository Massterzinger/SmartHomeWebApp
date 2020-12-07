import { Component, Input, OnInit } from '@angular/core';
import { ValueChange } from 'src/app/input-components/ValueChange';

@Component({
  selector: 'app-device-action',
  templateUrl: './device-action.component.html',
  styleUrls: ['./device-action.component.scss'],
})
export class DeviceActionComponent extends ValueChange implements OnInit {
  @Input()
  valueType!: string;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
