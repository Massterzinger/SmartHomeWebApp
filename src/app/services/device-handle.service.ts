import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServerConfig } from '../configs/server-config';
import { PathHelper } from '../helpers/path-helper';
import { IDevice } from '../interfaces/i-device';
import { DevicesMock } from '../mocks/devices-mock';
import { ApiService, ApiServiceErrorCodes } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DeviceHandleService {
  constructor(private apiService: ApiService) { }

  observableDevices: BehaviorSubject<IDevice[]> = new BehaviorSubject([]);

  public getAllDevices(): Observable<IDevice[]> {
    return this.observableDevices;
  }

  public deleteDevice(id: string): void {
    this.apiService.delete(PathHelper.joinParams(ServerConfig.endpoints.deleteDevice, id)).subscribe(
      () => this.refreshDevices(),
      (err) => {
        if (err === ApiServiceErrorCodes.noServer) {
          DevicesMock.splice(DevicesMock.findIndex(item => item.id === id), 1);
          this.refreshDevices();
        } else {
          throwError(err);
        }
      });
  }

  public refreshDevices(): void {
    this.apiService.get<IDevice[]>(ServerConfig.endpoints.getAllDevices).pipe(
      catchError(err => this.processResponseError(err, DevicesMock))
    ).subscribe(items => this.observableDevices.next(items));
  }

  updateDeviceValue(
    deviceId: string,
    actionEndpoint: string,
    newValue: any
  ): Observable<any> {
    return this.apiService.update(PathHelper.joinParams(ServerConfig.endpoints.updateDeviceValue, deviceId, actionEndpoint), newValue).pipe(
      catchError(err => this.processResponseError(err, newValue))
    );
  }


  private processResponseError<T>(err: any, fallbackValue: T): Observable<T> {
    if (err === ApiServiceErrorCodes.noServer) {
      return from([fallbackValue]); // request fails, just update model
    } else {
      return throwError(err);
    }
  }
}
