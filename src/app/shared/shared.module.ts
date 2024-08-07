import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantHomeComponent } from './tenant-home/tenant-home.component';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    TenantHomeComponent,
    TenantDetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
