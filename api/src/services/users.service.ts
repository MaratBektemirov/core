import { Injectable } from '@nestjs/common';
import { DbService } from '@api/services/db.service';
import { TokenService } from '@api/services/token.service';
import { Tables } from '@api/tables';

@Injectable()
export class UsersService {
  constructor(private db: DbService, private tokenService: TokenService) {}

  public async getUserRoles(userId: number) {
    return this.db.find(Tables.userRole, {userId});
  }

  public async getUserByTokenId(tokenId: string) {
    const token = await this.tokenService.getToken(tokenId);
    const res = await this.db.find(Tables.user, {id: token.userId});

    return res[0];
  }
}
