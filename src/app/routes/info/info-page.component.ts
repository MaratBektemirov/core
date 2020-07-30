import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';

@Component({
  selector: 'info-page',
  templateUrl: './info-page.component.html',
  styleUrls: [ './info-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class InfoPageComponent extends BaseComponent implements OnInit {
  subscriptions$ = [];

  constructor(baseComponentService: BaseComponentService) {
    super(baseComponentService);
  }

  public ngOnInit() {
  }
}
