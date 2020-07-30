import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';

@Component({
  selector: 'no-content',
  templateUrl: './no-content.component.html',
  styleUrls: [ './no-content.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NoContentComponent extends BaseComponent {
  subscriptions$ = [];

  constructor(baseComponentService: BaseComponentService) {
    super(baseComponentService);
  }
}
