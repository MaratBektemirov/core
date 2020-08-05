import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';
import { RealtyUI, UserRealtyUI } from '@interfaces/ui';

@Component({
  selector: 'realty-card',
  templateUrl: './realty-card.component.html',
  styleUrls: [ './realty-card.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class RealtyCardComponent extends BaseComponent implements OnInit, OnDestroy {
  @Input() realty: RealtyUI | UserRealtyUI;
  @Input() userRealty: boolean;

  subscriptions$ = [];

  constructor(baseComponentsService: BaseComponentService) {
    super(baseComponentsService);
  }

  getUserProfitPerMonth(userSpace: number) {
    const rentRatePerPriceSpace = this.realty.rentRate / this.realty.space;

    return Math.floor(rentRatePerPriceSpace * userSpace);
  }

  public ngOnInit() {
    console.log(this);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
