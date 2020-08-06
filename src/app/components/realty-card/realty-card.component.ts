import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';
import { RealtyUI, UserRealtyShareUI } from '@interfaces/ui';
import { RealtyService } from '@app/services/realty.service';

@Component({
  selector: 'realty-card',
  templateUrl: './realty-card.component.html',
  styleUrls: [ './realty-card.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class RealtyCardComponent extends BaseComponent implements OnInit, OnDestroy {
  @Input() realty: RealtyUI | UserRealtyShareUI;
  @Input() userRealty: boolean;

  subscriptions$ = [];

  constructor(baseComponentsService: BaseComponentService, public realtyService: RealtyService) {
    super(baseComponentsService);
  }

  public ngOnInit() {
    console.log(this);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
