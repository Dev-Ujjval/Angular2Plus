import { DefaultLayoutComponent } from '../layout/default-layout/default-layout.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';

export const PagesRoutes = [
    {
      path: '',
      component: DefaultLayoutComponent,
      children: [
        { path: 'home', component: HomeComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'error', component: ErrorComponent },
        { path: '**', redirectTo: 'error' },
      ]
    }
  ];
