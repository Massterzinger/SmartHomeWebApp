import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutAppComponent } from './about-app/about-app.component';
import { DeviceViewerComponent } from './devices/device-viewer/device-viewer.component';
import { DevicesManagerComponent } from './devices/devices-manager/devices-manager.component';
import { DevicesComponent } from './devices/devices.component';

const routes: Routes = [
  { path: 'about', component: AboutAppComponent },
  {
    path: 'devices', component: DevicesComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'viewer' },
      { path: 'viewer', component: DeviceViewerComponent },
      { path: 'manager', component: DevicesManagerComponent },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
