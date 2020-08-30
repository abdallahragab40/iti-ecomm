import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FuseSharedModule } from '@fuse/shared.module';

import { AddCourseComponent } from './add-course/add-course.component';
import { AcademyCoursesComponent } from './courses/courses.component';
import { AcademyCourseComponent } from './course/course.component';
import { AcademyCoursesService } from './courses.service';
import { AcademyCourseService } from './course.service';
import { FuseSidebarModule } from '@fuse/components';
import { AccessCodeComponent } from './dialogs/access-code/access-code.component';

const routes = [
  {
    path: '',
    component: AcademyCoursesComponent,
    resolve  : {
        academy: AcademyCoursesService
    }
  },
  {
    path: ':courseId',
    component: AcademyCourseComponent,
    // resolve  : {
    //     academy: AcademyCourseService
    // }
  },
  {
    path: 'edit/add-course',
    component: AddCourseComponent,
    // resolve  : {
    //     academy: AcademyCourseService
    // }
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [
    AcademyCoursesComponent,
    AcademyCourseComponent,
    AddCourseComponent,
    AccessCodeComponent,
  ],
  imports: [
    RouterModule.forChild(routes),

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    FuseSharedModule,
    FuseSidebarModule,
    MatDialogModule,
    MatToolbarModule,
  ],
  providers: [AcademyCoursesService, AcademyCourseService],
})
export class AcademyModule {}
