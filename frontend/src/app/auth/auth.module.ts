import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupInstructorComponent } from './signup/signup-instructor/signup-instructor.component';
import { SignupStudentComponent } from './signup/signup-student/signup-student.component';
import { SignupCommunityComponent } from './signup/signup-community/signup-community.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MailConfirmComponent } from './mail-confirm/mail-confirm.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { FuseSharedModule } from '@fuse/shared.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  imports: [
    HttpClientModule,
    FuseSharedModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'signup/instructor', component: SignupInstructorComponent },
      { path: 'signup/student', component: SignupStudentComponent },
      { path: 'signup/community', component: SignupCommunityComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'mail-confirm/:email', component: MailConfirmComponent },
      { path: 'reset-password/:token', component: ResetPasswordComponent },
    ]),
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    SignupInstructorComponent,
    SignupStudentComponent,
    SignupCommunityComponent,
    ForgotPasswordComponent,
    MailConfirmComponent,
    ResetPasswordComponent,
  ],
})
export class AuthModule {}
