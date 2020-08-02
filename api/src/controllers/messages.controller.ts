import { Controller, Post, Body, HttpStatus, Res, Response } from '@nestjs/common';
import { DbService } from '@api/services/db.service';
import { UsersService } from '@api/services/users.service';
import { LoginRequest, LoginResponse, LogoutRequest } from '@interfaces/api';
import { TokenService } from '@api/services/token.service';

@Controller('messages')
export class MessagesController {
  constructor(private db: DbService,
              private tokenService: TokenService,
              private usersService: UsersService) {
  }
}
