import { Component, Input, OnInit } from '@angular/core';
import { IDeviceValue } from 'src/app/interfaces/i-device';

@Component({
  selector: 'app-device-value',
  templateUrl: './device-value.component.html',
  styleUrls: ['./device-value.component.scss']
})
export class DeviceValueComponent implements OnInit {

  @Input()
  value?: IDeviceValue;

  constructor() { }

  ngOnInit(): void {
  }

  onUserValueChange(newValue: any){
    this.value!.value = newValue;
  }
}
