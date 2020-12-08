import { Component, OnInit } from '@angular/core';
import { DeviceHandleService } from '../services/device-handle.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  constructor(private devicesProvider: DeviceHandleService) { }

  ngOnInit(): void {
    this.devicesProvider.refreshDevices();
  }

}
