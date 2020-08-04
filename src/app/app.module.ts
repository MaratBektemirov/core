import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// carbon-components-angular default imports
import { UIShellModule } from 'carbon-components-angular';
import { Notification20Module } from '@carbon/icons-angular/lib/notification/20';
import { UserAvatar20Module } from '@carbon/icons-angular/lib/user--avatar/20';
import { AppSwitcher20Module } from '@carbon/icons-angular/lib/app-switcher/20';

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
import { NoContentComponent } from '@app/routes/no-content/no-content.component';
import { PageComponent } from '@app/components/page/page.component';
import {
  ButtonModule, CheckboxModule,
  GridModule,
  InputModule,
  LinkModule,
  NotificationModule,
  RadioModule, TableModule,
  TagModule
} from 'carbon-components-angular/index';
import { SearchPageComponent } from '@app/routes/search/search-page.component';
import { AuthGuard } from '@app/guards/auth.guard';
import { NoAuthGuard } from '@app/guards/no.auth.guard';
import { PasswordRegistrationDirective } from '@app/directives/password-registration.directive';
import { AppComponent } from '@app/app.component';
import { Logout20Module } from '@carbon/icons-angular/lib/logout/20';

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
];

const InfoModule = [
  SearchPageComponent,
];

const Directives = [
  PasswordRegistrationDirective,
];

@NgModule({
  declarations: [
    AppComponent,
    NoContentComponent,
    PageComponent,

    ...AuthModule,
    ...CabinetModule,
    ...InfoModule,
    ...Directives,
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
    NotificationModule,
    Logout20Module,
    RadioModule,
    GridModule,
    TagModule,
    CheckboxModule,
    TableModule
  ],
  providers: [
    environment.ENV_PROVIDERS,
    Providers,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenHttpInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
