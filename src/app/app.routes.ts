console.log("Angular src - app.routes.ts - START");

import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ReactComponent } from './react';
import { ProfileComponent } from './profile';
//import { angularProfileCard } from '../../components/main-profile/index';
import { NoContentComponent } from './no-content';
import { IbmbpmComponent } from './ibmbpm/ibmbpm.component';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'posts', loadChildren: './posts#PostsModule' },
  { path: 'profile', component: ProfileComponent },
  { path: 'react', component: ReactComponent },
  { path: 'ibmbpm', component: IbmbpmComponent },
  { path: '**',    component: NoContentComponent },
];

console.log("Angular src - app.routes.ts - DONE");