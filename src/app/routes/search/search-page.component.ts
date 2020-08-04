import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';
import { RealtyOfficeCategory, RealtyPurpose } from '@interfaces/realty';
import { FormGroup } from '@angular/forms';
import { IFilterSet } from '@app/intefaces/filter';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: [ './search-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SearchPageComponent extends BaseComponent implements OnInit, OnDestroy {
  subscriptions$ = [];

  public officeCategories: IFilterSet<RealtyOfficeCategory>[] = [
    { value: RealtyOfficeCategory.A, checked: false },
    { value: RealtyOfficeCategory.B, checked: false },
    { value: null, checked: false },
  ];

  public realtyPurpose: IFilterSet<RealtyPurpose>[] = [
    { value: RealtyPurpose.default, checked: false},
    { value: RealtyPurpose.office, checked: false},
    { value: RealtyPurpose.manufacture, checked: false},
    { value: RealtyPurpose.retail, checked: false},
    { value: RealtyPurpose.store, checked: false},
    { value: RealtyPurpose.cafe, checked: false},
  ];

  public RealtyPurpose = RealtyPurpose;
  public showOfficeCategory = false;
  public form: FormGroup;

  constructor(baseComponentService: BaseComponentService) {
    super(baseComponentService);

    console.log(this);
  }

  selected(event) {
    console.log(event);
    console.log(event);
  }

  onCheckboxChange() {
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
