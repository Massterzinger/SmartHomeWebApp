import { Component, OnInit } from '@angular/core';
import { IDevice } from 'src/app/interfaces/i-device';
import { DevicesMock } from 'src/app/mocks/devices-mock';
import { DeviceHandleService } from 'src/app/services/device-handle.service';

@Component({
  selector: 'app-devices-manager',
  templateUrl: './devices-manager.component.html',
  styleUrls: ['./devices-manager.component.scss']
})
export class DevicesManagerComponent implements OnInit {

  devices: IDevice[] = [];

  constructor(private devicesProvider: DeviceHandleService) {
  }

  ngOnInit(): void {
    this.devicesProvider.getAllDevices().subscribe(
      devices => this.devices = devices
    );
  }

  deleteDevice(id: string): void {
    this.devicesProvider.deleteDevice(id);
  }

}
