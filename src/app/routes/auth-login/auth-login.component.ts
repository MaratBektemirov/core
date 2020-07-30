import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: [ './auth-login.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AuthLoginComponent extends BaseComponent implements AfterViewInit {
  public form = new FormGroup(
    {
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    }
  );

  @ViewChild('phone', { read: ElementRef, static: true })
  public phone: ElementRef<HTMLElement>;
  @ViewChild('password', { read: ElementRef, static: true })
  public password: ElementRef<HTMLElement>;

  public submitting: boolean = false;
  public error: string;
  public hide: boolean = true;

  subscriptions$ = [];
  private _loginAutoCompleted: boolean;
  private _passwordAutoCompleted: boolean;

  constructor(private autoFillMonitor: AutofillMonitor,
              baseComponentService: BaseComponentService,
              private cdr: ChangeDetectorRef) {
    super(baseComponentService);
  }

  public ngAfterViewInit() {
    this.subscriptions$.push(
      this.autoFillMonitor.monitor(this.phone)
        .subscribe(() => this._loginAutoCompleted = true),
      this.autoFillMonitor.monitor(this.password)
        .subscribe(() => this._passwordAutoCompleted = true),
    );
  }

  public formIsValid() {
    return (this._loginAutoCompleted && this._passwordAutoCompleted) || this.form.valid;
  }

  public hidePasswordToggle($event: MouseEvent) {
    this.hide = !this.hide;
    $event.stopPropagation();
  }

  public async onSubmit() {
    this.submitting = true;
    this.error = '';

    const { phone, password } = this.form.value;

    try {
      await this.baseComponentService.userService.login({ phone, password });
      this.baseComponentService.router.navigateByUrl(this.paths.cabinet.getAbsoluteUrl());
    } catch (e) {
      this.error = 'Неверный телефон или пин-код';
    }

    this.submitting = false;
    this.cdr.markForCheck();
  }
}
