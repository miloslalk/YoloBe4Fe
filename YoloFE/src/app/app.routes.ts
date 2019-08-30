import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDashboardListComponent } from './user-dashboard-list/user-dashboard-list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "user-dashboard", component: UserDashboardComponent },
  { path: "user-dashboard-list", component: UserDashboardListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}
