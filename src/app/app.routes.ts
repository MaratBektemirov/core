import { Routes } from '@angular/router';
import { AuthComponent } from '@app/routes/auth/auth.component';
import { NoContentComponent } from '@app/routes/no-content/no-content.component';
import { AuthRegistrationComponent } from '@app/routes/auth-registration/auth-registration.component';
import { AuthRestoreComponent } from '@app/routes/auth-restore/auth-restore.component';
import { AuthLoginComponent } from '@app/routes/auth-login/auth-login.component';
import { CabinetRealtyComponent } from '@app/routes/cabinet-realty/cabinet-realty.component';
import paths from '@paths/client';
import { AuthGuard } from '@app/guards/auth.guard';
import { NoAuthGuard } from '@app/guards/no.auth.guard';
import { PageComponent } from '@app/components/page/page.component';
import { SearchPageComponent } from '@app/routes/search/search-page.component';
import { CabinetProfileComponent } from '@app/routes/cabinet-profile/cabinet-profile.component';
import { CabinetRealtyCardComponent } from '@app/routes/cabinet-realty-card/cabinet-realty-card.component';

export const routesConfig: Routes = [
  {
    path: '',
    redirectTo: paths.search.getAbsoluteUrl(),
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
      {path: '', redirectTo: paths.cabinetRealtyList.getAbsoluteUrl(), pathMatch: 'full'},
      {path: paths.cabinetRealtyList.url, component: CabinetRealtyComponent},
      {path: paths.cabinetRealtyCard.url + '/:id', component: CabinetRealtyCardComponent},
      {path: paths.profile.url, component: CabinetProfileComponent},
    ]
  },
  {
    path: paths.search.url,
    component: PageComponent,
    children: [
      {path: '', component: SearchPageComponent},
    ]
  },
  {path: '**', component: NoContentComponent},
];
