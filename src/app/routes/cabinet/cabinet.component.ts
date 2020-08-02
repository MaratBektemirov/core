import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@app/services/user.service';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';

@Component({
  selector: 'cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: [ './cabinet.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CabinetComponent extends BaseComponent {
  subscriptions$ = [];

  constructor(private router: Router,
              baseComponentService: BaseComponentService,
              private userService: UserService) {
    super(baseComponentService);
  }

  public logout() {
    this.userService.logout();
    this.router.navigateByUrl(this.paths.login.getAbsoluteUrl());
  }
}
