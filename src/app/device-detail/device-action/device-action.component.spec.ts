import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceActionComponent } from './device-action.component';

describe('DeviceActionComponent', () => {
  let component: DeviceActionComponent;
  let fixture: ComponentFixture<DeviceActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
