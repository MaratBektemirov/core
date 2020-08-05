import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';

@Component({
  selector: 'cabinet-realty',
  templateUrl: './cabinet-profile.component.html',
  styleUrls: [ './cabinet-profile.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CabinetProfileComponent extends BaseComponent {
  subscriptions$ = [];

  constructor(private router: Router,
              baseComponentService: BaseComponentService) {
    super(baseComponentService);
  }
}
