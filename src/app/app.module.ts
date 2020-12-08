import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { FormsModule } from '@angular/forms';
import { TextInputComponent } from './input-components/text-input/text-input.component';
import { NumberInputComponent } from './input-components/number-input/number-input.component';
import { ColorInputComponent } from './input-components/color-input/color-input.component';
import { EnumInputComponent } from './input-components/enum-input/enum-input.component';
import { DeviceActionComponent } from './device-detail/device-action/device-action.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DeviceValueComponent } from './device-detail/device-value/device-value.component';
import { DeviceHandleService } from './services/device-handle.service';
import { DeviceViewerComponent } from './devices/device-viewer/device-viewer.component';
import { DevicesManagerComponent } from './devices/devices-manager/devices-manager.component';
import { HttpClientModule } from '@angular/common/http';
import { DevicesComponent } from './devices/devices.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceViewerComponent,
    AboutAppComponent,
    TextInputComponent,
    NumberInputComponent,
    ColorInputComponent,
    EnumInputComponent,
    DeviceActionComponent,
    DeviceDetailComponent,
    DeviceValueComponent,
    DevicesManagerComponent,
    DevicesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DeviceHandleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
