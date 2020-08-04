import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';
import { TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular/index';
import { RealtyCategory, RealtyPurpose } from '@interfaces/realty';

interface RealtyCategoryRadio {
  category: RealtyCategory;
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

  public model = new TableModel();
  public checkBoxFilters = [];
  public radioFilter = null;

  public dataset = [
    { name: 'Apple', type: ['Fruit'], color: 'Red' },
    { name: 'Grape', type: ['Fruit'], color: 'Purple' },
    { name: 'Eggplant', type: ['Fruit'], color: 'Purple' },
    { name: 'FruitVegMeat', type: ['Fruit', 'Vegetable', 'Meat'], color: 'White' },
    { name: 'Lettuce', type: ['Vegetable'], color: 'Green' },
    { name: 'Daikon Radish', type: ['Vegetable'], color: 'White' },
    { name: 'Beef', type: ['Meat'], color: 'Red' }
  ];

  public radios: RealtyCategoryRadio[] = [
    { category: RealtyCategory.A, checked: false },
    { category: RealtyCategory.B, checked: false },
    { category: RealtyCategory.OTHER, checked: false },
  ];

  public checkboxList: RealtyPurposeCheckbox[] = [
    { value: RealtyPurpose.cafe, checked: false},
    { value: RealtyPurpose.commercial, checked: false},
    { value: RealtyPurpose.manufacture, checked: false},
    { value: RealtyPurpose.default, checked: false},
    { value: RealtyPurpose.retail, checked: false},
    { value: RealtyPurpose.store, checked: false},
  ];

  constructor(baseComponentService: BaseComponentService) {
    super(baseComponentService);
  }

  onCheckboxChange(event) {
    if (event.checked) {
      this.checkBoxFilters.push(event.source.value);
    } else {
      this.checkBoxFilters.splice(this.checkBoxFilters.indexOf(event.source.value), 1);
    }
    this.applyFilters();
  }

  onRadioChange(event) {
    this.radioFilter = event.value;
    this.applyFilters();
  }

  resetFilters() {
    this.resetCheckboxList();
    this.resetRadios();
  }

  resetCheckboxList() {
    this.checkBoxFilters = [];
    this.checkboxList = this.checkboxList.map((obj) => ({ value: obj.value, checked: false }));
    this.applyFilters();
  }

  resetRadios() {
    this.radioFilter = null;
    this.radios = this.radios.map((obj) => ({ category: obj.category, checked: false }));
    this.applyFilters();
  }

  applyFilters() {
    this.model.data =
      this.dataset
        .filter((data) =>
          (this.checkBoxFilters.every((filter) => data.type.includes(filter))) &&
          (data.color === this.radioFilter || !this.radioFilter))
        .map((filteredData) =>
          [
            new TableItem({ data: filteredData.name }),
            new TableItem({ data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' })
          ]);
  }

  ngOnInit() {
    // document.querySelector('.sb-show-main').classList.add('full-page');

    this.model.header = [new TableHeaderItem({ data: 'Name' }), new TableHeaderItem({ data: 'Description' })];

    this.model.data = this.dataset.map((datapoint) =>
      [
        new TableItem({ data: datapoint.name}),
        new TableItem({ data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' })
      ]
    );
  }
  ngOnDestroy() {
    // document.querySelector('.sb-show-main').classList.remove('full-page');
  }
}
