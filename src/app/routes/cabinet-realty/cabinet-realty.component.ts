import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';
import { RealtyService } from '@app/services/realty.service';
import { UserRealtyShareUI } from '@interfaces/ui';

@Component({
  selector: 'cabinet-realty',
  templateUrl: './cabinet-realty.component.html',
  styleUrls: [ './cabinet-realty.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CabinetRealtyComponent extends BaseComponent implements OnInit {
  subscriptions$ = [];
  public realties: UserRealtyShareUI[] = [];

  constructor(private router: Router,
              private realtyService: RealtyService,
              private cdr: ChangeDetectorRef,
              baseComponentService: BaseComponentService) {
    super(baseComponentService);
  }

  async ngOnInit() {
    this.realties = await this.realtyService.user();
    this.cdr.detectChanges();
    console.log(this.realties);
  }
}
