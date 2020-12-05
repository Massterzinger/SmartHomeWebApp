import { Directive, EventEmitter, Injectable, Output } from '@angular/core';

@Directive()
export abstract class ValueChange {
  @Output()
  valueChanged?: EventEmitter<any> = new EventEmitter<any>();

}
