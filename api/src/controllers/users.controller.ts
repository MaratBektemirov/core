import { BadRequestException, Body, Controller, Post, Req, Res } from '@nestjs/common';
import { DbService } from '@api/services/db.service';
import { UsersService } from '@api/services/users.service';
import { LoginRegistration, LoginRequest, LoginResponse, LogoutRequest } from '@interfaces/api';
import { TokenService } from '@api/services/token.service';
import { usersApiEndpoints } from '@endpoints/users';
import { Tables } from '@api/tables';
import { UserRoles } from '@interfaces/user';

@Controller(usersApiEndpoints.prefix)
export class UsersController {
  constructor(private db: DbService,
              private tokenService: TokenService,
              private usersService: UsersService) {
  }

  @Post(usersApiEndpoints.api.registration)
  public async registration(@Body() body: LoginRegistration): Promise<LoginResponse> {
    const res = await this.db.insert(Tables.user, body);

    if (!res) {
      throw new BadRequestException('User not found');
    }

    const user = res[0];
    delete user.password;

    const token = await this.tokenService.createToken(user.id);
    await this.db.insert(Tables.user_role, {userId: user.id, roleId: UserRoles.user});

    return {
      token,
      user,
    };
  }

  @Post(usersApiEndpoints.api.login)
  public async login(@Body() body: LoginRequest, @Req() req): Promise<LoginResponse> {
    const res = await this.db.find(Tables.user, body);

    if (!res) {
      throw new BadRequestException('User not found');
    }

    console.log(res);

    const user = res[0];
    delete user.password;

    const token = await this.tokenService.createToken(user.id);

    return {
      token,
      user,
    };
  }

  @Post(usersApiEndpoints.api.logout)
  public async logout(@Body() body: LogoutRequest, @Res() res): Promise<string> {
    const deleteTokenResult = await this.tokenService.deleteToken(body.tokenId);

    if (deleteTokenResult.rowCount) {
      return 'ok';
    } else {
      throw new BadRequestException('Token not found');
    }
  }
}
