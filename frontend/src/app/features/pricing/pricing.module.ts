import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { FuseSharedModule } from '@fuse/shared.module';

import { PricingOffersComponent } from 'app/features/pricing/pricing-offers/pricing-offers.component';
import { PricingSuccessComponent } from 'app/features/pricing/pricing-success/pricing-success.component';
import { NgxPayPalModule } from 'ngx-paypal';

const routes = [
    {
        path     : '',
        component: PricingOffersComponent
    },
    {
        path     : 'success',
        component: PricingSuccessComponent
    }
];

@NgModule({
    declarations: [
      PricingOffersComponent,
      PricingSuccessComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        NgxPayPalModule,

        MatButtonModule,
        MatDividerModule,

        FuseSharedModule
    ]
})
export class PricingModule
{
}
