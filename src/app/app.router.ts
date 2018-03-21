import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'passengers',
    loadChildren: 'app/passenger-dashboard/passenger-dashboard.module#PassengerDashboardModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const appRouter = RouterModule.forRoot(appRoutes);
