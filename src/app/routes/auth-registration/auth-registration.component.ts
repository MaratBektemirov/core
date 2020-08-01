import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutofillMonitor } from '@angular/cdk/text-field';
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

  constructor(public userService: UserService,
              private autoFillMonitor: AutofillMonitor,
              baseComponentService: BaseComponentService) {
    super(baseComponentService);
  }

  public async ngOnInit() {}

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

  public async onSubmit() {
    // this.submitting = true;
    this.error = '';

    const { phone, password } = this.form.value;

    await this.userService.registration({ phone, password });
  }
}
