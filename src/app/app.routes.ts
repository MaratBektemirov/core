import { Routes } from '@angular/router';
import { InfoPageComponent } from '@app/routes/info/info-page.component';
import { AuthComponent } from '@app/routes/auth/auth.component';
import { PageComponent } from '@app/routes/page/page.component';
import { NoContentComponent } from '@app/routes/no-content/no-content.component';
import { AuthRegistrationComponent } from '@app/routes/auth-registration/auth-registration.component';
import { AuthRestoreComponent } from '@app/routes/auth-restore/auth-restore.component';
import { AuthLoginComponent } from '@app/routes/auth-login/auth-login.component';
import { CabinetComponent } from '@app/routes/cabinet/cabinet.component';
import { CabinetInvoiceComponent } from '@app/routes/cabinet-invoice/cabinet-invoice.component';
import { CabinetContentComponent } from '@app/routes/cabinet-content/cabinet-content.component';
import { CabinetProfileComponent } from '@app/routes/cabinet-profile/cabinet-profile.component';
import paths from '@paths/client';

export const routesConfig: Routes = [
  {path: '', redirectTo: paths.login.getAbsoluteUrl(), pathMatch: 'full'},
  // {path: paths.pages.url, component: PageComponent, children: [
  //     {path: paths.info.url, component: InfoPageComponent},
  //   ]
  // },
  {path: paths.auth.url, component: AuthComponent, children: [
      {path: paths.login.url, component: AuthLoginComponent},
      {path: paths.registration.url, component: AuthRegistrationComponent},
      {path: paths.restore.url, component: AuthRestoreComponent},
    ]
  },
  {path: paths.cabinet.url, component: CabinetComponent, children: [
      {path: paths.account.url, component: CabinetProfileComponent},
    ]
  },
  {path: '**', component: NoContentComponent},
];
