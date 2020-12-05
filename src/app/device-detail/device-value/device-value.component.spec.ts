import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceValueComponent } from './device-value.component';

describe('DeviceValueComponent', () => {
  let component: DeviceValueComponent;
  let fixture: ComponentFixture<DeviceValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
