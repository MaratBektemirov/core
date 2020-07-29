import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { RegionService } from '@app/services/region.service';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Regions } from '@constants/regions';
import { UserService } from '@app/services/user.service';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';

@Component({
  selector: 'auth-registration',
  templateUrl: './auth-registration.component.html',
  styleUrls: [ './auth-registration.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AuthRegistrationComponent extends BaseComponent implements OnInit, AfterViewInit {
  public form = new FormGroup(
    {
      userPhone: new FormControl('', [Validators.required]),
      regionId: new FormControl('', [Validators.required]),
    }
  );

  @ViewChild('userPhone', { read: ElementRef, static: true })
  public userPhone: ElementRef<HTMLElement>;

  public submitting: boolean = false;
  public error: string;
  public hide: boolean = true;
  public filteredRegions: Observable<Regions[]>;

  private subscriptions$ = [];
  private _loginAutoCompleted: boolean;
  private _allRegions: Regions[] = [];

  constructor(public userService: UserService,
              private autoFillMonitor: AutofillMonitor,
              baseComponentService: BaseComponentService,
              private regionService: RegionService,
              private cdr: ChangeDetectorRef) {
    super(baseComponentService);

    this.filteredRegions = this.form.controls['regionId'].valueChanges
      .pipe(
        startWith(''),
        map((filterValue) => filterValue ? this._filterRegions(filterValue) : this._allRegions.slice())
      );
  }

  public async ngOnInit() {
    // this._allRegions = await this.regionService.getAllRegions();
    this._allRegions = [];
    this.form.controls['regionId'].setValue('');
  }

  public ngAfterViewInit() {
    this.subscriptions$.push(
      this.autoFillMonitor.monitor(this.userPhone)
        .subscribe(() => this._loginAutoCompleted = true),
    );
  }

  public formIsValid() {
    return (this._loginAutoCompleted) || this.form.valid;
  }

  public getRegionById(regionId: Regions): string {
    return null;
    // return this.TR.regions[regionId][this.UL];
  }

  public autocompleteDisplayValue: (regionId: Regions) => string = (regionId) => {
    return null;
    // return typeof regionId === 'number' ? this.TR.regions[regionId][this.UL] : '';
  }

  public async onSubmit() {
    // this.submitting = true;
    this.error = '';

    const { userPhone, regionId } = this.form.value;

    // this.partnerService.createPartnerInvoke({
    //   phone: userPhone,
    //   regionId
    // }).toPromise();

    // this.userService.login(login, password)
    //   .subscribe(() => {
    //     this.submitting = false;
    //   }, (err: HttpErrorResponse) => {
    //     if (err.error.error) {
    //       let errMsg = err.error.error.message;
    //
    //       this.submitting = false;
    //
    //       // @hack: maybe non-standard MongoDB error
    //       if (typeof errMsg === 'object') {
    //         console.error('Non-standard error response', err.error.error);
    //
    //         errMsg = `${errMsg.name}: ${errMsg.message}`;
    //       }
    //
    //       this.error = errMsg;
    //
    //       return;
    //     }
    //
    //     this.submitting = false;
    //     this.error = 'Invalid Email, Username or Password';
    //   });
  }

  private _filterRegions(value: string): Regions[] {
    let filterValue: string;

    if (typeof value === 'number') {
      const region = this.getRegionById(value);

      region
        ? filterValue = ''
        : filterValue = this.getRegionById(value).toLowerCase();
    } else {
      filterValue = value.toLowerCase();
    }

    return this._allRegions.filter((region) => {
      return this.getRegionById(region).toLowerCase().includes(filterValue);
    });
  }
}
