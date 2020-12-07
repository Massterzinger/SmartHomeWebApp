import { Component, OnInit } from '@angular/core';
import { IDevice } from '../interfaces/i-device';
import { DeviceHandleService } from '../services/device-handle.service';

@Component({
  selector: 'app-device-viewer',
  templateUrl: './device-viewer.component.html',
  styleUrls: ['./device-viewer.component.scss']
})
export class DeviceViewerComponent implements OnInit {

  devices: IDevice[] = [];

  constructor(private devicesProvider: DeviceHandleService) {
  }

  ngOnInit(): void {
    this.devicesProvider.getAllDevices().subscribe(
      devices => this.devices = devices
    );
  }

}
