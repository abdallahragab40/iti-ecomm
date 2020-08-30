import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { UserAccessGuard } from './auth/user-access.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    canActivate: [UserAccessGuard],
  },
  {
    path: 'courses',
    loadChildren: './academy/academy.module#AcademyModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'pricing',
    loadChildren: './features/pricing/pricing.module#PricingModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'faq',
    loadChildren: './features/faq/faq.module#FaqModule',
  },
  {
    path: 'calendar',
    loadChildren: './features/calendar/calendar.module#CalendarModule',
    canActivate: [AuthGuard],
  },
  { path: 'home', loadChildren: './core/core.module#CoreModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'error', loadChildren: './error/error.module#ErrorModule' },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, UserAccessGuard],
})
export class AppRoutingModule {}
