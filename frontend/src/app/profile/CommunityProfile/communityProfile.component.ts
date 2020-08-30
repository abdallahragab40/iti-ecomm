import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'community-profile',
  templateUrl: './communityProfile.component.html',
  styleUrls: ['./communityProfile.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class CommunityProfileComponent implements OnInit {
  /**
   * Constructor
   */
  constructor(private _profileService: ProfileService) {}
  community: any;

  ngOnInit(): void {
    this.community = this._profileService.getAbout();
    console.log(this.community);
  }
}
