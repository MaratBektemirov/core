import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '@api/guards/roles.guard';
import { UsersService } from '@api/services/users.service';
import { UsersController } from '@api/controllers/users.controller';
import { DbService } from '@api/services/db.service';
import { MessagesService } from '@api/services/messages.service';
import { TokenService } from '@api/services/token.service';
import { MessagesController } from '@api/controllers/messages.controller';
import { RealtyController } from '@api/controllers/realty.controller';

@Module({
  imports: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    UsersService,
    DbService,
    MessagesService,
    TokenService,
  ],
  controllers: [
    UsersController,
    MessagesController,
    RealtyController
  ]
})
export class AppModule {}
