import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { FuseSharedModule } from '@fuse/shared.module';

import { ProfileService } from './profile.service';
import { StudentProfileComponent } from './StudentProfile/studentProfile.component';
import { InstructorProfileComponent } from './InstructorProfile/instructorProfile.component';
import { CommunityProfileComponent } from './CommunityProfile/communityProfile.component';
import { ImageDialogComponent } from './dialogs/image/image.component';

import { StudentProfileAboutComponent } from './StudentProfile/tabs/about/about.component';
import { InstructorProfileAboutComponent } from './InstructorProfile/tabs/about/about.component';
import { CommunityProfileAboutComponent } from './CommunityProfile/tabs/about/about.component';
import { MatInputModule } from '@angular/material/input';
import { MessageComponent } from './dialogs/message/message.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { PublicProfileAboutComponent } from './public-profile/tabs/about/about.component';
import { PublicProfileService } from './public-profile/public-profile.service';

@NgModule({
  declarations: [
    StudentProfileComponent,
    InstructorProfileComponent,
    CommunityProfileComponent,
    StudentProfileAboutComponent,
    InstructorProfileAboutComponent,
    CommunityProfileAboutComponent,
    ImageDialogComponent,
    MessageComponent,
    PublicProfileComponent,
    PublicProfileAboutComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'student', component: StudentProfileComponent },
      { path: 'instructor', component: InstructorProfileComponent },
      { path: 'community', component: CommunityProfileComponent },
      { path: 'users/:username', component: PublicProfileComponent, resolve: {profile: PublicProfileService} },
    ]),
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,

    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    FuseSharedModule,
    MatToolbarModule
  ],
  providers: [ProfileService, PublicProfileService],
})
export class ProfileModule {}
