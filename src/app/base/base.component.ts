import paths from '@paths/client';
import { TR } from '@localization/index';
import { BaseComponentService } from '@app/base/base-component.service';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

enum LabelState {
  'success' = 'success',
  'warning' = 'warning',
  'error' = 'error'
}

export abstract class BaseComponent implements OnDestroy {
  public paths = paths;
  public LabelState = LabelState;

  abstract subscriptions$: Subscription[];

  constructor(public baseComponentService: BaseComponentService) {}

  get tr() {
    return TR[this.baseComponentService.userService.user.language];
  }

  ngOnDestroy() {
    for (const s of this.subscriptions$) {
      s.unsubscribe();
    }
  }
}
