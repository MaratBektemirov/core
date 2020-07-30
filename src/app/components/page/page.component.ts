import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: [ './page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PageComponent extends BaseComponent implements OnInit, OnDestroy {
  subscriptions$ = [];

  constructor(baseComponentsService: BaseComponentService) {
    super(baseComponentsService);
  }

  public ngOnInit() {
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
