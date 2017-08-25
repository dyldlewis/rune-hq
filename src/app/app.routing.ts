import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { CatelogComponent } from './catelog/catelog.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'catelog',
    component: CatelogComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
