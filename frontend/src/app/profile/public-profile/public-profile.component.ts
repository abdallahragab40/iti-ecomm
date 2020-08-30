import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { MessageComponent } from '../dialogs/message/message.component';
import { PublicProfileService } from './public-profile.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector     : 'public-profile',
    templateUrl  : './public-profile.component.html',
    styleUrls    : ['./public-profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class PublicProfileComponent implements OnInit, OnDestroy
{
  user: any;
  private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     */
    constructor(public dialog: MatDialog, private _profileService: PublicProfileService)
    {
      this._unsubscribeAll = new Subject();
    }
  ngOnInit() {
    this._profileService.userOnChanged
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe(user => {
        this.user = user;
    });
  }

    openDialog() {
      this.dialog.open(MessageComponent, {
        panelClass: 'message-dialog',
      });
    }

      /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
