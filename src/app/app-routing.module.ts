import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutAppComponent } from './about-app/about-app.component';
import { DeviceViewerComponent } from './device-viewer/device-viewer.component';

const routes: Routes = [
  { path: 'about', component: AboutAppComponent },
  { path: 'devices', component: DeviceViewerComponent },
  { path: '', pathMatch: 'full', redirectTo: 'about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
