import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';

@Component({
  selector: 'cabinet-profile',
  templateUrl: './cabinet-profile.component.html',
  styleUrls: [ './cabinet-profile.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CabinetProfileComponent extends BaseComponent implements OnInit {
  subscriptions$ = [];

  constructor(baseComponentService: BaseComponentService,) {
    super(baseComponentService);
  }

  public ngOnInit() {
  }
}
