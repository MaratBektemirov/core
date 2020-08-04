import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';
import { IRealty, RealtyOfficeCategory, RealtyPurpose } from '@interfaces/realty';
import { ClientFilter, ClientFilterLogic } from '@classes/client.filter';

interface RealtyCategoryRadio {
  category: RealtyOfficeCategory;
  checked: boolean;
}

interface RealtyPurposeCheckbox {
  value: RealtyPurpose;
  checked: boolean;
}

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: [ './search-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SearchPageComponent extends BaseComponent implements OnInit, OnDestroy {
  subscriptions$ = [];

  public radios: RealtyCategoryRadio[] = [
    { category: RealtyOfficeCategory.A, checked: false },
    { category: RealtyOfficeCategory.B, checked: false },
    { category: null, checked: false },
  ];

  public checkboxList: RealtyPurposeCheckbox[] = [
    { value: RealtyPurpose.default, checked: false},
    { value: RealtyPurpose.office, checked: false},
    { value: RealtyPurpose.manufacture, checked: false},
    { value: RealtyPurpose.retail, checked: false},
    { value: RealtyPurpose.store, checked: false},
    { value: RealtyPurpose.cafe, checked: false},
  ];

  public RealtyPurpose = RealtyPurpose;
  public showOfficeCategory = false;
  public filter: ClientFilter<IRealty>;

  constructor(baseComponentService: BaseComponentService) {
    super(baseComponentService);

    this.filter = new ClientFilter(
      {
        purpose: ClientFilterLogic.or,
      }
    );
  }

  selected(event) {
    console.log(event);
    console.log(event);
  }

  onCheckboxChange(event, purposeCheckbox: RealtyPurposeCheckbox) {
  }

  onRadioChange(event) {
  }

  resetFilters() {
    this.resetCheckboxList();
    this.resetRadios();
  }

  resetCheckboxList() {
  }

  resetRadios() {
  }

  applyFilters() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
