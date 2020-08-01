import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from '@api/services/users.service';
import { UserRoles } from '@interfaces/user';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector,
              private usersService: UsersService) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<UserRoles[]>('roles', context.getHandler()) || [];
    const request = context.switchToHttp().getRequest();
    const tokenId = request.headers['token-id'];

    if (roles.length && tokenId) {
      const user = await this.usersService.getUserByTokenId(tokenId);

      const userRoles = await this.usersService.getUserRoles(user.id);

      request.user = user;
      request.userRolesIds = userRoles.map((r) => r.roleId);

      for (const roleId of roles) {
        if (!request.userRolesIds.includes(roleId)) {
          return false;
        }
      }
    }

    return true;
  }
}
