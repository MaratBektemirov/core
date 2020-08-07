import { Injectable } from '@angular/core';
import { ApiService } from '@app/services/api.service';
import { UserService } from '@app/services/user.service';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class BaseComponentService {
  public update = new ReplaySubject();

  constructor(
    public router: Router,
    public api: ApiService,
    public userService: UserService) {
  }
}
