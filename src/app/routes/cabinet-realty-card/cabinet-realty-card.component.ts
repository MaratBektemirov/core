import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';
import { RealtyService } from '@app/services/realty.service';
import { CabinetRealtyUICard, RealtyUI } from '@interfaces/ui';
import { IUserRealty } from '@interfaces/userRealty';
import { map } from 'rxjs/operators';
import { IUserDeal } from '@interfaces/userDeal';
import * as _ from 'lodash';

@Component({
  selector: 'cabinet-realty-card',
  templateUrl: './cabinet-realty-card.component.html',
  styleUrls: [ './cabinet-realty-card.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CabinetRealtyCardComponent extends BaseComponent implements OnInit {
  subscriptions$ = [];
  public realty: RealtyUI;
  public shares: IUserRealty[];
  public deals: IUserDeal[];
  public loaded = false;
  public shareToReserve: IUserRealty;
  public updateObs;
  public agreement = false;
  public signIsSended = false;
  public signIsNotValid = false;
  data: any;
  options: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              public realtyService: RealtyService,
              public cdr: ChangeDetectorRef,
              baseComponentService: BaseComponentService) {
    super(baseComponentService);

    this.updateObs = this.baseComponentService.update.pipe(
      map(async () => {
        await this.updateCard();
        this.cdr.detectChanges();
      })
    );
  }

  async updateCard() {
    const card = await this.realtyService.byId(this.route.snapshot.params['id'] * 1);
    this.loaded = true;
    this.realty = card.realty;
    this.shares = card.shares;
    this.deals = card.deals;
  }

  async ngOnInit() {
    await this.updateCard();

    function getD(n: number) {
      const d = new Date();
      d.setMonth(d.getMonth() + n);

      return d.toISOString();
    }

    const getData = (n) => {
      return {
        'date': getD(n),
        'value': this.realty.pricePerSpaceItem + ((this.realty.pricePerSpaceItem / 100) * this.realty.priceIncreasePerMonth) * n,
      };
    };

    this.data = {
      'labels': [
      ],
      'datasets': [
        {
          'label': 'Изменения цены',
          'data': [
            getData(0),
            getData(1),
            getData(2),
            getData(3),
            getData(4),
            getData(5),
            getData(6),
          ]
        }
      ]
    };
    this.options = {
      'title': 'Вероятная цена за кв.м по месяцам',
      'axes': {
        'left': {},
        'bottom': {
          'scaleType': 'time'
        }
      },
      'height': '500px'
    };
    this.cdr.detectChanges();
  }

  submitReserveShare(share: IUserRealty) {
    this.realtyService.reserve(share.id);
  }

  reserveShare(share: IUserRealty) {
    this.shareToReserve = share;
  }

  closeReserveModal() {
    this.shareToReserve = null;
    this.cdr.detectChanges();
  }

  allIsOk(): boolean {
    return (_.uniq(this.shares.map((d) => d.userId)).length + 1) === _.uniq(this.deals.map((d) => d.userId)).length;
  }

  isDealTime() {
    return this.shares.every((s) => s.reservedUserId);
  }

  isOwner() {
    return this.shares.every((s) => s.userId === this.baseComponentService.userService.user.id);
  }

  download(): string {
    return this.realtyService.pdfGetLink(this.realty.id);
  }

  sign() {
    this.realtyService.sign(this.realty.id);
    this.signIsSended = true;
    this.cdr.detectChanges();
  }
}
