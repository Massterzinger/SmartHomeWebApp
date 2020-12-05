import { Component, OnInit } from '@angular/core';
import { Device } from '../models/device';
import { DevicesProviderService } from '../services/devices-provider.service';

@Component({
  selector: 'app-device-viewer',
  templateUrl: './device-viewer.component.html',
  styleUrls: ['./device-viewer.component.scss']
})
export class DeviceViewerComponent implements OnInit {
  devicesProvider: DevicesProviderService;

  devices: Device[] = [];

  constructor(devicesProvider: DevicesProviderService) {
    this.devicesProvider = devicesProvider;
   }

  ngOnInit(): void {
    this.devicesProvider.getDevices().subscribe(devices => this.devices = devices);
  }

}
