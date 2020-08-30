import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { PricingStyle3Component } from './pricing/style-3.component';


@NgModule({
  imports: [
    MatIconModule,
    SharedModule,
    FuseSharedModule,
    MatDividerModule,
    MatButtonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
  declarations: [HomeComponent, PricingStyle3Component],
  exports: [],
})
export class CoreModule {}
