import { Injectable } from '@nestjs/common';
import { DbService } from '@api/services/db.service';
import { Tables } from '@api/tables';

@Injectable()
export class TokenService {
  constructor(private db: DbService) {
  }

  public async getToken(id: string) {
    const res = await this.db.find(Tables.user_access_token, {id});

    return res[0];
  }

  public async createToken(userId: number) {
    const res = await this.db.insert(Tables.user_access_token, {userId});

    return res[0];
  }

  public async deleteToken(id: string) {
    return await this.db.delete(Tables.user_access_token, {id});
  }
}
