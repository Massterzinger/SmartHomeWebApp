import { TestBed } from '@angular/core/testing';

import { DeviceHandleService } from './device-handle.service';

describe('DeviceHandleServiceService', () => {
  let service: DeviceHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
