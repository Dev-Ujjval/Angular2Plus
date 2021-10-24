import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

import { CanDeactivateGuard } from './can-deactivate-guard.service';

const routes: Routes = [
  {path: 'parent', component: ParentComponent, canDeactivate: [CanDeactivateGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'parent'},
  {path: 'child', component: ChildComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateGuard]
})
export class AppRoutingModule { }


