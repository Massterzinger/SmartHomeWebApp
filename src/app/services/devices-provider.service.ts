import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { DevicesMock } from '../mocks/devices-mock';
import { Device } from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class DevicesProviderService {
  getDevices(): Observable<Device[]> {
    
    return from([DevicesMock]); // Change when using API
  }

  constructor() { }
}
