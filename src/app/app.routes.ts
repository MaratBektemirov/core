import { Routes } from '@angular/router';
import { AuthComponent } from '@app/routes/auth/auth.component';
import { NoContentComponent } from '@app/routes/no-content/no-content.component';
import { AuthRegistrationComponent } from '@app/routes/auth-registration/auth-registration.component';
import { AuthRestoreComponent } from '@app/routes/auth-restore/auth-restore.component';
import { AuthLoginComponent } from '@app/routes/auth-login/auth-login.component';
import { CabinetComponent } from '@app/routes/cabinet/cabinet.component';
import paths from '@paths/client';
import { AuthGuard } from '@app/guards/auth.guard';
import { NoAuthGuard } from '@app/guards/no.auth.guard';
import { PageComponent } from '@app/components/page/page.component';

export const routesConfig: Routes = [
  {
    path: '',
    redirectTo: paths.login.getAbsoluteUrl(),
    pathMatch: 'full'
  },
  {
    path: paths.auth.url,
    component: AuthComponent,
    canActivate: [NoAuthGuard],
    children: [
      {path: paths.login.url, component: AuthLoginComponent},
      {path: paths.registration.url, component: AuthRegistrationComponent},
      {path: paths.restore.url, component: AuthRestoreComponent},
    ]
  },
  {
    path: paths.cabinet.url,
    canActivate: [AuthGuard],
    component: PageComponent,
    children: [
      {path: '', redirectTo: paths.account.getAbsoluteUrl(), pathMatch: 'full'},
      {path: paths.account.url, component: CabinetComponent},
    ]
  },
  {path: '**', component: NoContentComponent},
];
