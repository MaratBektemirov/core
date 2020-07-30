import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef, OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { BaseComponent } from '@app/base/base.component';
import { BaseComponentService } from '@app/base/base-component.service';

@Component({
  selector: 'auth-restore',
  templateUrl: './auth-restore.component.html',
  styleUrls: [ './auth-restore.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AuthRestoreComponent extends BaseComponent implements OnInit, AfterViewInit, OnDestroy {
  public form = new FormGroup(
    {
      phone: new FormControl('', [Validators.required]),
    }
  );

  @ViewChild('phone', { read: ElementRef, static: true })
  public phone: ElementRef<HTMLElement>;

  public submitting: boolean = false;
  public error: string;
  public hide: boolean = true;

  subscriptions$ = [];
  private _loginAutoCompleted: boolean;

  constructor(
    private autoFillMonitor: AutofillMonitor,
    baseComponentService: BaseComponentService,
    private cdr: ChangeDetectorRef) {
    super(baseComponentService);
  }

  public ngOnInit() {
  }

  public ngAfterViewInit() {
    this.subscriptions$.push(
      this.autoFillMonitor.monitor(this.phone)
        .subscribe(() => this._loginAutoCompleted = true),
    );
  }

  public formIsValid() {
    console.log(this);

    return this._loginAutoCompleted || this.form.valid;
  }

  public hidePasswordToggle($event: MouseEvent) {
    this.hide = !this.hide;
    $event.stopPropagation();
  }

  public onSubmit() {
    // this.submitting = true;
    this.error = '';

    const { login } = this.form.value;

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

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
