import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// carbon-components-angular default imports
import { UIShellModule } from 'carbon-components-angular';
import { Notification20Module } from '@carbon/icons-angular/lib/notification/20';
import { UserAvatar20Module } from '@carbon/icons-angular/lib/user--avatar/20';
import { AppSwitcher20Module } from '@carbon/icons-angular/lib/app-switcher/20';

import { HeaderComponent } from './header/header.component';

import { routesConfig } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { RegionService } from '@app/services/region.service';
import { MessageService } from '@app/services/message.service';
import { UserService } from '@app/services/user.service';
import { ApiService } from '@app/services/api.service';
import { TokenHttpInterceptor } from '@app/app.interceptor';
import { BaseComponentService } from '@app/base/base-component.service';
import { AuthComponent } from '@app/routes/auth/auth.component';
import { AuthLoginComponent } from '@app/routes/auth-login/auth-login.component';
import { AuthRegistrationComponent } from '@app/routes/auth-registration/auth-registration.component';
import { AuthRestoreComponent } from '@app/routes/auth-restore/auth-restore.component';
import { CabinetComponent } from '@app/routes/cabinet/cabinet.component';
import { CabinetProfileComponent } from '@app/routes/cabinet-profile/cabinet-profile.component';
import { NoContentComponent } from '@app/routes/no-content/no-content.component';
import { PageComponent } from '@app/components/page/page.component';
import { ButtonModule, InputModule, LinkModule, NotificationModule } from 'carbon-components-angular/index';
import { NumberOnlyDirective } from '@app/directives/number-only.directive';
import { InfoPageComponent } from '@app/routes/info/info-page.component';
import { AuthGuard } from '@app/guards/auth.guard';
import { NoAuthGuard } from '@app/guards/no.auth.guard';

const Providers = [
  RegionService,
  MessageService,
  UserService,
  ApiService,
  BaseComponentService,
  AuthGuard,
  NoAuthGuard,
];

const AuthModule = [
  AuthComponent,
  AuthLoginComponent,
  AuthRegistrationComponent,
  AuthRestoreComponent,
];

const CabinetModule = [
  CabinetComponent,
  CabinetProfileComponent,
];

const InfoModule = [
  InfoPageComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoContentComponent,
    PageComponent,
    NumberOnlyDirective,

    ...AuthModule,
    ...CabinetModule,
    ...InfoModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routesConfig, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
    ReactiveFormsModule,
    UIShellModule,
    Notification20Module,
    UserAvatar20Module,
    AppSwitcher20Module,
    InputModule,
    ButtonModule,
    LinkModule,
    NotificationModule
  ],
  bootstrap: [AppComponent],
  providers: [
    environment.ENV_PROVIDERS,
    Providers,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenHttpInterceptor,
      multi: true,
    }
  ]
})
export class AppModule { }
