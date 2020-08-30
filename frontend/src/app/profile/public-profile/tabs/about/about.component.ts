import { Component, ViewEncapsulation, Input } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';

@Component({
    selector     : 'public-profile-about',
    templateUrl  : './about.component.html',
    styleUrls    : ['./about.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class PublicProfileAboutComponent
{
    @Input() user: any;

    constructor() {}
}
