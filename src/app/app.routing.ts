import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { CatelogComponent } from './catelog/catelog.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component'
import { AdminComponent }   from './admin/admin.component';

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
  },
  {
    path: 'profiles/:id',
    component: ProfileDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
