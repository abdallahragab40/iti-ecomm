import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fuseAnimations } from '@fuse/animations';
import { ProfileService } from '../profile.service';
import { ImageDialogComponent } from '../dialogs/image/image.component';

@Component({
  selector: 'student-profile',
  templateUrl: './instructorProfile.component.html',
  styleUrls: ['./instructorProfile.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class InstructorProfileComponent implements OnInit {
  instructor: any;
  imagePreview: string;
  isLoading: boolean;
  /**
   * Constructor
   */
  constructor(
    private _profileService: ProfileService,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    this.dialog.open(ImageDialogComponent, {
      panelClass: 'image-dialog',
    });
  }

  ngOnInit(): void {
    this._profileService
      .getUser(this._profileService.getAbout())
      .then((res) => (this.instructor = res));
  }
}
