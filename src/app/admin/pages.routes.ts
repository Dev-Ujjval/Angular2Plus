import { AdminLayoutComponent} from '../layout/admin/admin-layout/admin-layout.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardService } from '../shared/gurds/auth.guard';

export const PagesRoutes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
    ]
  },
];
