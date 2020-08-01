import { BadRequestException, Body, Controller, Post, Res } from '@nestjs/common';
import { DbService } from '@api/services/db.service';
import { UsersService } from '@api/services/users.service';
import { LoginRegistration, LoginRequest, LoginResponse, LogoutRequest } from '@interfaces/api';
import { TokenService } from '@api/services/token.service';
import { usersApiEndpoints } from '@endpoints/users';
import { Tables } from '@api/tables';
import { IUser } from '@interfaces/user';

@Controller(usersApiEndpoints.prefix)
export class UsersController {
  constructor(private db: DbService,
              private tokenService: TokenService,
              private usersService: UsersService) {
  }

  @Post(usersApiEndpoints.api.registration)
  public async registration(@Body() body: LoginRegistration): Promise<LoginResponse> {
    const createdUser = await this.db.insert<LoginRegistration>(Tables.user, body);

    if (!createdUser) {
      throw new BadRequestException('User not found');
    }

    delete createdUser[0].password;

    const token = await this.tokenService.createToken(createdUser[0].id);

    return {
      token: token[0],
      user: createdUser[0],
    };
  }

  @Post(usersApiEndpoints.api.login)
  public async login(@Body() body: LoginRequest): Promise<LoginResponse> {
    const user = await this.db.find<IUser>(Tables.user, body);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    delete user[0].password;

    const token = await this.tokenService.createToken(user[0].id);

    return {
      token: token[0],
      user: user[0],
    };
  }

  @Post(usersApiEndpoints.api.logout)
  public async logout(@Body() body: LogoutRequest, @Res() res): Promise<any> {
    const deleteTokenResult = await this.tokenService.deleteToken(body.tokenId);

    if (deleteTokenResult.rowCount) {
      return 'ok';
    } else {
      // res.status(HttpStatus.NOT_FOUND).send();
    }

    console.log(deleteTokenResult);
  }
}
