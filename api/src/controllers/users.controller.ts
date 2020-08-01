import { Controller, Post, Body, HttpStatus, Res, BadRequestException } from '@nestjs/common';
import { DbService } from '@api/services/db.service';
import { UsersService } from '@api/services/users.service';
import { LoginRequest, LoginResponse, LogoutRequest } from '@interfaces/api';
import { TokenService } from '@api/services/token.service';

@Controller('users')
export class UsersController {
  constructor(private dbService: DbService,
              private tokenService: TokenService,
              private usersService: UsersService) {
  }

  @Post('/login')
  public async login(@Body() body: LoginRequest): Promise<LoginResponse> {
    const user = await this.usersService.find(body);

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

  @Post('/logout')
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
