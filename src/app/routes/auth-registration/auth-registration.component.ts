import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutofillMonitor } from '@angular/cdk/text-field';
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
      passwordAgain: new FormControl('', [Validators.required]),
    }
  );

  public submitting: boolean = false;
  public error: string;
  public hide: boolean = true;

  subscriptions$ = [];

  constructor(public userService: UserService,
              private autoFillMonitor: AutofillMonitor,
              baseComponentService: BaseComponentService) {
    super(baseComponentService);
  }

  public async ngOnInit() {}

  public ngAfterViewInit() {
    this.subscriptions$.push();
  }

  public formIsValid() {
    return this.form.valid && (this.form.value.password === this.form.value.passwordAgain);
  }

  public async onSubmit() {
    this.error = '';

    const { phone, password } = this.form.value;

    await this.userService.registration({ phone, password });
  }
}
