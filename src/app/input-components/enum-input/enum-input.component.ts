import { Component, Input, OnInit } from '@angular/core';
import { IDeviceAction } from 'src/app/interfaces/i-device';
import { ValueChange } from '../ValueChange';

@Component({
  selector: 'app-enum-input',
  templateUrl: './enum-input.component.html',
  styleUrls: ['./enum-input.component.scss'],
})
export class EnumInputComponent extends ValueChange implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void { }
}
