import { Component, Input, OnInit } from '@angular/core';
import { IDeviceValue } from 'src/app/interfaces/i-device';
import { DeviceHandleService } from 'src/app/services/device-handle.service';

@Component({
  selector: 'app-device-value',
  templateUrl: './device-value.component.html',
  styleUrls: ['./device-value.component.scss'],
})
export class DeviceValueComponent implements OnInit {
  @Input()
  value!: IDeviceValue;

  @Input()
  deviceId!: string;

  constructor(public valueUpdaterService: DeviceHandleService) { }

  ngOnInit(): void { }

  onUserValueChange(newValue: any): void {

    this.valueUpdaterService
      .updateDeviceValue(this.deviceId, this.value.changeAction.actionEndpoint, newValue)
      .subscribe(
        data => {
          this.value.value = data;
          this.value.changeAction.value = this.value.value;
        },
        err => {
          setTimeout(() => {
            this.value.changeAction.value = this.value.value;
          });
          console.log(err);
        }
      );
  }
}
