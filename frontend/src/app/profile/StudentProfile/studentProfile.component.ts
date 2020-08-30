import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fuseAnimations } from '@fuse/animations';
import { ProfileService } from '../profile.service';
import { ImageDialogComponent } from '../dialogs/image/image.component';

@Component({
  selector: 'student-profile',
  templateUrl: './studentProfile.component.html',
  styleUrls: ['./studentProfile.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class StudentProfileComponent implements OnInit {
  /**
   * Constructor
   */
  constructor(
    private _profileService: ProfileService,
    public dialog: MatDialog
  ) {}
  student: any;

  ngOnInit(): void {
    this._profileService
      .getUser(this._profileService.getAbout())
      .then((res) => (this.student = res));
  }

  openDialog(): void {
    this.dialog.open(ImageDialogComponent, {
      panelClass: 'image-dialog',
    });
  }
}
