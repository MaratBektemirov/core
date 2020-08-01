import { Injectable } from '@nestjs/common';
import { createConnection, Connection } from 'typeorm';
import { User } from 'typeorm/entity/User';

@Injectable()
export class DbService {
  private connection: Connection;

  constructor() {
    (async () => {
      await this.createConnection();
      this.connection.getRepository(User);
    })();
  }

  public async query<T>(query, values): Promise<T> {
    if (!this.connection) {
      this.connection = await createConnection();
      console.log('Connected PostgreSQL');
    }

    let result;
    let error;

    try {
      console.log(query);
      console.log(values);

      result = await this.connection.query(query, values);
    } catch (e) {
      error = e;

      console.log(e);
    }

    if (error) {
      throw Error(error);
    }

    return result.rows;
  }

  public prepareForInsert(obj: any) {
    const keys = [];
    const indexes = [];
    const values = [];

    const objectKeys = Object.keys(obj);

    for (let i = 0; i < objectKeys.length; i++) {
      const key = objectKeys[i];
      const value = obj[key];

      keys.push(key);
      values.push(value);
      indexes.push('$' + (i + 1));
    }

    return {
      keys,
      indexes,
      values,
    };
  }

  public prepareForGet(obj: any) {
    const objectKeys = Object.keys(obj);
    const where = [];
    const values = [];

    for (let i = 0; i < objectKeys.length; i++) {
      const key = objectKeys[i];
      const value = obj[key];

      where.push(`${key} = $${i + 1}`);
      values.push(value);
    }

    return {
      where: where.join(' AND '),
      values,
    };
  }

  private async createConnection() {
    this.connection = await createConnection();
    console.log('Connected PostgreSQL');
  }
}
