import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { AppRoutingModule } from './app-routing.module';
import { ErrorModule } from './error/error.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AcademyModule } from './academy/academy.module';
import { ProfileModule } from './profile/profile.module';
import { PricingModule } from './features/pricing/pricing.module';
import { FaqModule } from './features/faq/faq.module';
import { CalendarModule } from './features/calendar/calendar.module';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error/error-interceptor';

import { fuseConfig } from 'app/fuse-config';
import { VerticalLayout1Module } from 'app/layout/vertical/layout-1/layout-1.module';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule } from '@fuse/components';
import { ToastService, AngularToastifyModule } from 'angular-toastify';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    AuthModule,
    AcademyModule,
    SharedModule,
    FuseModule.forRoot(fuseConfig),
    FuseProgressBarModule,
    FuseSharedModule,
    FuseSidebarModule,
    VerticalLayout1Module,
    AngularToastifyModule,
    ErrorModule,
    ProfileModule,
    PricingModule,
    FaqModule,
    CalendarModule,
    MatMomentDateModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ToastService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
