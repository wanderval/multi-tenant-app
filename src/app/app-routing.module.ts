import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantHomeComponent } from './shared/tenant-home/tenant-home.component';
import { TenantDetailsComponent } from './shared/tenant-details/tenant-details.component';

// const routes: Routes = [
//   //{ path: '', redirectTo: ':tenantId', pathMatch: 'full' },
//   { path: ':tenantId', component: TenantHomeComponent }
// ];

const routes: Routes = [
  {
    path: ':tenantId',
    component: TenantHomeComponent,
    children: [
      { path: 'details', component: TenantDetailsComponent } // Rota filha
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
