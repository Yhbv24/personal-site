import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { PhotographyComponent } from './photography/photography.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'photography',
    component: PhotographyComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
