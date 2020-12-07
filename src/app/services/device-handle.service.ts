import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PathHelper } from '../helpers/path-helper';
import { IDevice } from '../interfaces/i-device';
import { DevicesMock } from '../mocks/devices-mock';
import { ApiService, ApiServiceErrorCodes } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DeviceHandleService {
  constructor(private apiService: ApiService) { }

  public getAllDevices(): Observable<IDevice[]> {
    return this.apiService.get<IDevice[]>('allDevices').pipe(
      // map(items => items),
      catchError(err => from([DevicesMock]))
    );
  }

  updateDeviceValue(
    deviceId: string,
    actionEndpoint: string,
    newValue: any
  ): Observable<any> {
    return this.apiService.get(PathHelper.joinParams(deviceId, actionEndpoint, newValue)).pipe(
      catchError(err => {
        if (err === ApiServiceErrorCodes.noServer) {
          return from([newValue]); // request fails, just update model
        } else {
          return throwError(err);
        }
      })
    );
  }
}
