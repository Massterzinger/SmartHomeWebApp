import { IDevice, IDeviceAction, IDeviceValue } from '../interfaces/i-device';

export class Device implements IDevice {
  id: string;
  name: string;
  description?: string;
  values: IDeviceValue[];

  constructor(id: string, name: string, values: IDeviceValue[] = []) {
    this.id = id;
    this.name = name;
    this.values = values;
  }
}

export class DeviceValue implements IDeviceValue {
  caption: string;
  type: string;
  value: any;
  changeAction?: IDeviceAction;

  constructor(
    caption: string,
    type: string,
    value: any = null,
    action?: IDeviceAction
  ) {
    this.caption = caption;
    this.type = type;
    this.value = value;
    this.changeAction = action;
  }
}

export class DeviceAction implements IDeviceAction {
  constructor(
    public actionEndpoint: string,
    public value?: any,
    public applicables?: any
  ) { }
}

export class RangeApplicable {
  constructor(public min: number, public max: number) { }
}

export class EnumApplicable {
  constructor(public values: string[]) { }
}
