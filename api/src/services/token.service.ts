import { Injectable } from '@nestjs/common';
import * as md5 from 'md5';
import { DbService } from '@api/services/db.service';
import { IUserAccessToken } from '@interfaces/user';
import { Tables } from '@api/tables';

@Injectable()
export class TokenService {
  constructor(private dbService: DbService) {
  }

  public async getToken(id: string) {
    const res = await this.dbService.query<IUserAccessToken[]>(
      `SELECT * FROM ${Tables.user_access_token} WHERE id = $1`,
      [id]
    );

    return res[0];
  }

  public async createToken(userId: number) {
    const token: IUserAccessToken = {
      id: md5(Date.now()),
      userId: userId,
    };

    const {values, indexes, keys} = this.dbService.prepareForInsert(token);

    return await this.dbService.query<IUserAccessToken[]>(
      `INSERT INTO ${Tables.user_access_token}(${keys.join(', ')}) VALUES (${indexes.join(', ')}) RETURNING *`,
      values
    );
  }

  public async deleteToken(id: string) {
    return await this.dbService.query<{rowCount: number}>(
      `DELETE FROM ${Tables.user_access_token} WHERE id = $1`,
      [id]
    );
  }
}
