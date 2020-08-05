import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';
import { RealtyOfficeCategory, RealtyPurpose } from '@interfaces/realty';
import { FormGroup } from '@angular/forms';
import { IFilterSet } from '@app/intefaces/filter';
import { RealtyUI } from '@interfaces/ui';
import { RealtyService } from '@app/services/realty.service';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: [ './search-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SearchPageComponent extends BaseComponent implements OnInit, OnDestroy {
  subscriptions$ = [];
  public realties: RealtyUI[] = [];

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

  constructor(baseComponentService: BaseComponentService,
              private realtyService: RealtyService,
              private cdr: ChangeDetectorRef) {
    super(baseComponentService);

    console.log(this);
  }

  async ngOnInit() {
    this.realties = await this.realtyService.all();
    this.cdr.detectChanges();
    console.log(this.realties);
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

  ngOnDestroy() {
  }
}
