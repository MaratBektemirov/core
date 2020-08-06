import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';
import { RealtyService } from '@app/services/realty.service';
import { UserRealtyUI } from '@interfaces/ui';

function getD(n: number) {
  const d = new Date();
  d.setMonth(d.getMonth() + n);

  return d.toISOString();
}

@Component({
  selector: 'cabinet-realty-card',
  templateUrl: './cabinet-realty-card.component.html',
  styleUrls: [ './cabinet-realty-card.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CabinetRealtyCardComponent extends BaseComponent implements OnInit {
  subscriptions$ = [];
  public realty: UserRealtyUI;
  data: any;
  options: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              public realtyService: RealtyService,
              private cdr: ChangeDetectorRef,
              baseComponentService: BaseComponentService) {
    super(baseComponentService);
  }

  async ngOnInit() {
    const realties = await this.realtyService.user();
    this.realty = realties.find((r) => r.id === (this.route.snapshot.params['id'] * 1));

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
}
