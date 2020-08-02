import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import paths from '@paths/client';
import { Injectable } from '@angular/core';
import { UserService } from '@app/services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.userService.isAuth()) {
      this.router.navigateByUrl(paths.login.getAbsoluteUrl());

      return false;
    }

    return true;
  }
}
