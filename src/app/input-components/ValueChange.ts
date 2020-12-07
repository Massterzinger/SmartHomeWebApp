import {
  Directive,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IDeviceAction } from 'src/app/interfaces/i-device';

@Directive()
export abstract class ValueChange {
  @Input()
  changeAction!: IDeviceAction;

  @Output()
  valueChanged: EventEmitter<any> = new EventEmitter<any>();
}
