import { IDevice } from '../interfaces/i-device';
import { Device, DeviceAction, DeviceValue, EnumApplicable, RangeApplicable } from '../models/device';

export const DevicesMock: IDevice[] = [
  new Device('itemId5', 'Air conditioner', [
    new DeviceValue('State', 'enum', 'Off', new DeviceAction('setstate/', 'Off', ['On', 'Off'])),
    new DeviceValue('Temperature', 'number', 20, new DeviceAction('settemp/', 20, new RangeApplicable(10, 30))),
    new DeviceValue('Blowing power', 'enum', 'Low', new DeviceAction('setpower/', 'Low', ['Low', 'Medium', 'High']))
  ]),
  new Device('itemId1', 'Kitchen Light', [
    new DeviceValue('State', 'enum', 'On', new DeviceAction('setstate/', 'On', ['On', 'Off']))
  ]),
  new Device('itemId2', 'Dining room Light', [
    new DeviceValue('State', 'enum', 'Off', new DeviceAction('setstate/', 'Off', ['On', 'Off']))
  ]),
  new Device('itemId6', 'Color lamp', [
    new DeviceValue('State', 'enum', 'Off', new DeviceAction('setstate/', 'Off', ['On', 'Off'])),
    new DeviceValue('State', 'color', '#00ff00', new DeviceAction('setcolor/', '#00ff00'))
  ]),
  new Device('itemId3', 'Termometer outside', [
    new DeviceValue('Temperature', 'number', 0)
  ]),
  new Device('itemId4', 'Termometer in living room', [
    new DeviceValue('Temperature', 'number', 22)
  ]),
];

const deviceSchema: IDevice = {
  id: 'itemId',
  name: '',
  description: '',

  values: [
    // if changeAction is present -> user can modify value
    // if applicables are present -> let user choose from them only
    { caption: 'State', value: 'On', type: 'enum', changeAction: { actionEndpoint: 'setstate/', applicables: ['On', 'Off'] } }, // if type is enum -> applicables should contain all values
    { caption: 'Temperature', value: 20, type: 'number', changeAction: { actionEndpoint: 'settemp/', applicables: { min: 10, max: 30 } } }, // if type is number -> applicables should be range
    { caption: 'Color', value: '#00aa00', type: 'color', changeAction: { actionEndpoint: 'setcolor/' } },
    { caption: 'Blow power', value: 1, type: 'number', changeAction: { actionEndpoint: 'setpower/', applicables: { min: 1, max: 3 } } },
    { caption: 'Blow power', value: "low", type: 'enum', changeAction: { actionEndpoint: 'setpower/', applicables: ['low', 'medium', 'high'] } },
  ]
  // example usage: 'devices/itemId/setstate/On'
}
