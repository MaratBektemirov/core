import { BadRequestException, Body, Controller, HttpCode, Post, Req } from '@nestjs/common';
import { DbService } from '@api/services/db.service';
import { UsersService } from '@api/services/users.service';
import { LoginRegistration, LoginRequest, LoginResponse } from '@interfaces/api';
import { TokenService } from '@api/services/token.service';
import { usersApiEndpoints } from '@endpoints/users';
import { Tables } from '@api/tables';
import { UserRoles } from '@interfaces/user';
import { Languages } from '@constants/languages';

@Controller(usersApiEndpoints.prefix)
export class UsersController {
  constructor(private db: DbService,
              private tokenService: TokenService,
              private usersService: UsersService) {
  }

  @Post(usersApiEndpoints.api.registration)
  public async registration(@Body() body: LoginRegistration): Promise<LoginResponse> {
    const res = await this.db.insert(Tables.user, Object.assign(body, {language: Languages.RU}));

    if (!res) {
      throw new BadRequestException('User not found');
    }

    const user = res[0];
    delete user.password;

    const token = await this.tokenService.createToken(user.id);
    await this.db.insert(Tables.userRole, {userId: user.id, roleId: UserRoles.user});

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
  @HttpCode(200)
  public async logout(@Req() req) {
    const deleteTokenResult = await this.tokenService.deleteToken(req.headers['token-id']);

    if (deleteTokenResult && deleteTokenResult[1] > 0) {
      return {};
    } else {
      throw new BadRequestException('Token not found');
    }
  }
}
