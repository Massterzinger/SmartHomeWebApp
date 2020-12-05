export interface IDevice {
    id: string;
    name: string;
    description?: string;
    values: IDeviceValue[];
}

export interface IDeviceValue {
    caption: string;
    type: string;
    value: any;
    changeAction?: IDeviceAction;
}

export interface IDeviceAction{
    actionEndpoint: string;
    value?: any;
    applicables?: any;
}