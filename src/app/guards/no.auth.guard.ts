import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '@app/services/user.service';
import paths from '@paths/client';
import { Injectable } from '@angular/core';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.isAuth()) {
      this.router.navigateByUrl(paths.cabinet.getAbsoluteUrl());

      return false;
    }

    return true;
  }
}
