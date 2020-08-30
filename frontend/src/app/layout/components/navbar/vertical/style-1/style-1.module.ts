import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FuseSharedModule } from '@fuse/shared.module';

import { NavbarVerticalStyle1Component } from 'app/layout/components/navbar/vertical/style-1/style-1.component';

@NgModule({
  declarations: [NavbarVerticalStyle1Component],
  imports: [MatButtonModule, MatIconModule, FuseSharedModule],
  exports: [NavbarVerticalStyle1Component],
})
export class NavbarVerticalStyle1Module {}
