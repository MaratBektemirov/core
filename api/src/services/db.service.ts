import { Injectable } from '@nestjs/common';
import { createConnection, Connection } from 'typeorm';
import { Tables } from '@api/tables';

@Injectable()
export class DbService {
  private connection: Connection;

  constructor() {
    (async () => {
      await this.createConnection();
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

  public async insert<T>(table: Tables, data: T) {
    const { keys, values, indexes } = this.prepareForInsert(data);

    return await this.query(
      `INSERT INTO ${table}(${keys.join(', ')}) VALUES(${indexes.join(', ')})`,
      values,
    );
  }

  public async find<T>(table: Tables, data: Partial<T>): Promise<T[]> {
    const { where, values } = this.prepareForGet(data);

    return await this.query(
      `SELECT * FROM ${table} WHERE ${where}`,
      values,
    );
  }

  private async createConnection() {
    this.connection = await createConnection();
    console.log('Connected PostgreSQL');
  }
}
