import { Component, Input, OnInit } from '@angular/core';
import { IDevice } from '../interfaces/i-device';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {

  @Input()
  device: IDevice;

  constructor() { }

  ngOnInit(): void {
  }
}
