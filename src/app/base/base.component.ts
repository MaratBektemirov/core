import paths from '@paths/client';
import { TR } from '@localization/index';
import { BaseComponentService } from '@app/base/base-component.service';

enum LabelState {
  'success' = 'success',
  'warning' = 'warning',
  'error' = 'error'
}

export class BaseComponent {
  public paths = paths;
  public LabelState = LabelState;

  constructor(public baseComponentService: BaseComponentService) {}

  get tr() {
    return TR[this.baseComponentService.userService.user.language];
  }
}
