import { DefaultLayoutComponent } from '../layout/default/default-layout/default-layout.component';

import { HomeComponent } from './components/home/home.component';

export const PagesRoutes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
];
