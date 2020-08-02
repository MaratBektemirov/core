import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from '@api/services/users.service';
import { UserRoles } from '@interfaces/user';
import { TokenService } from '@api/services/token.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector,
              private tokenService: TokenService,
              private usersService: UsersService) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const tokenId = request.headers['token-id'];

    if (tokenId) {
      request.user = await this.usersService.getUserByTokenId(tokenId);
      request.userRoles = await this.usersService.getUserRoles(request.user.id);
    }

    const roles = this.reflector.get<UserRoles[]>('roles', context.getHandler()) || [];

    if (roles.length) {
      for (const roleId of roles) {
        if (!request.userRoles.map((r) => r.roleId).includes(roleId)) {
          return false;
        }
      }
    }

    return true;
  }
}
