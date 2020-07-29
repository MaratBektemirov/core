import { Injectable } from '@angular/core';
import { ApiService } from '@app/services/api.service';
import { UserService } from '@app/services/user.service';
import { Router } from '@angular/router';

@Injectable()
export class BaseComponentService {
  constructor(
    public router: Router,
    public api: ApiService,
    public userService: UserService) {
  }
}
