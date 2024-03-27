import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FairDashboardComponent } from './component/fair-dashboard/fair-dashboard.component';
import { FairDetailsComponent } from './component/fair-details/fair-details.component';

const routes: Routes = [

  {
    path: 'fairs',
    component: FairDashboardComponent,
    children: [{
      path: ':fairsId',
      component: FairDetailsComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
