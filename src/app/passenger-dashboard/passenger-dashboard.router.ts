import { Routes, RouterModule } from '@angular/router';

import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

export const passengerDashboardRoutes: Routes = [
  {
    path: '',
    component: PassengerDashboardComponent,
  },
  {
    path: ':id',
    component: PassengerViewerComponent
  }
];

export const passengerDashboardRouter = RouterModule.forChild(passengerDashboardRoutes);
