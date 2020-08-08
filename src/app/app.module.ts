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
import { CabinetRealtyComponent } from '@app/routes/cabinet-realty/cabinet-realty.component';
import { NoContentComponent } from '@app/routes/no-content/no-content.component';
import { PageComponent } from '@app/components/page/page.component';
import {
  AccordionModule,
  ButtonModule, CheckboxModule, ContentSwitcherModule,
  GridModule,
  InputModule,
  LinkModule, ModalModule,
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
import { CabinetProfileComponent } from '@app/routes/cabinet-profile/cabinet-profile.component';
import { RealtyCardComponent } from '@app/components/realty-card/realty-card.component';
import { RealtyService } from '@app/services/realty.service';
import { CommonModule } from '@angular/common';
import { CabinetRealtyCardComponent } from '@app/routes/cabinet-realty-card/cabinet-realty-card.component';
import { MomentPipe } from '@app/pipes/moment.pipe';
import { ChartsModule } from '@carbon/charts-angular';
import { PhonePipe } from '@app/pipes/phone.pipe';
import { Renew20Module } from '@carbon/icons-angular/lib/renew/20';
import { CertificateCheckModule } from '@carbon/icons-angular/lib';
import { CertificateCheck20Module } from '@carbon/icons-angular/lib/certificate--check/20';
import { CheckmarkFilled20Module } from '@carbon/icons-angular/lib/checkmark--filled/20';

const Providers = [
  RegionService,
  MessageService,
  UserService,
  ApiService,
  BaseComponentService,
  AuthGuard,
  NoAuthGuard,
  RealtyService,
];

const AuthModule = [
  AuthComponent,
  AuthLoginComponent,
  AuthRegistrationComponent,
  AuthRestoreComponent,
];

const CabinetModule = [
  CabinetRealtyComponent,
  CabinetProfileComponent,
  CabinetRealtyCardComponent,
];

const PublicModule = [
  SearchPageComponent,
];

const Directives = [
  PasswordRegistrationDirective,
];

const Pipes = [
  MomentPipe,
  PhonePipe,
];

@NgModule({
  declarations: [
    AppComponent,
    NoContentComponent,
    PageComponent,
    RealtyCardComponent,

    ...AuthModule,
    ...CabinetModule,
    ...PublicModule,
    ...Directives,
    ...Pipes,
  ],
  imports: [
    CommonModule,
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
    TableModule,
    ContentSwitcherModule,
    ChartsModule,
    ModalModule,
    Renew20Module,
    AccordionModule,
    CertificateCheckModule,
    CertificateCheck20Module,
    CheckmarkFilled20Module
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
