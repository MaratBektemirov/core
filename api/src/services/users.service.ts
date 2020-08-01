import { Injectable } from '@nestjs/common';
import { DbService } from '@api/services/db.service';
import { TokenService } from '@api/services/token.service';
import { IUser, UserRole } from '@interfaces/user';

@Injectable()
export class UsersService {
  constructor(private dbService: DbService, private tokenService: TokenService) {}

  public async createUser(user: IUser) {
    const { keys, values, indexes } = this.dbService.prepareForInsert(user);

    return await this.dbService.query(
      `INSERT INTO users(${keys.join(', ')}) VALUES(${indexes.join(', ')})`,
      values,
    );
  }

  public async find(user: Partial<IUser>): Promise<IUser[]> {
    const { where, values } = this.dbService.prepareForGet(user);

    return await this.dbService.query(
      `SELECT * FROM users WHERE ${where}`,
      values,
    );
  }

  public async getUserRoles(userId: number): Promise<UserRole[]> {
    const { where, values } = this.dbService.prepareForGet({userId});

    return await this.dbService.query(
      `SELECT DISTINCT user_role_id FROM users_roles WHERE ${where}`,
      values,
    );
  }

  public async getUserByTokenId(tokenId: string): Promise<IUser> {
    const token = await this.tokenService.getToken(tokenId);

    const user = {id: token.userId} as IUser;

    const { where, values } = this.dbService.prepareForGet(user);

    const res = await this.dbService.query(
      `SELECT * FROM users WHERE ${where}`,
      values,
    );

    return res[0];
  }
}
