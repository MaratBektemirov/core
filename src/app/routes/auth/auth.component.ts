import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: [ './auth.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AuthComponent extends BaseComponent implements OnInit {
  constructor(baseComponentsService: BaseComponentService) {
    super(baseComponentsService);

    if (this.baseComponentService.userService.isAuth()) {
      this.baseComponentService.router.navigateByUrl(this.paths.cabinet.getAbsoluteUrl());

      return;
    }
  }

  public ngOnInit() {
  }
}
