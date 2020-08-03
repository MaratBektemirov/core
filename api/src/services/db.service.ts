import { Injectable } from '@nestjs/common';
import { createConnection, Connection } from 'typeorm';
import { Tables, TablesSpec } from '@api/tables';

@Injectable()
export class DbService {
  private connection: Connection;

  constructor() {
    this.createConnection();
  }

  public prepareForInsert(obj: any) {
    const keys = [];
    const indexes = [];
    const values = [];

    const objectKeys = Object.keys(obj);

    for (let i = 0; i < objectKeys.length; i++) {
      const key = objectKeys[i];
      const value = obj[key];

      keys.push(`"${key}"`);
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

      where.push(`"${key}" = $${i + 1}`);
      values.push(value);
    }

    return {
      where: where.join(' AND '),
      values,
    };
  }

  public async query<A>(query, values): Promise<A> {
    await this.createConnection();

    let result;
    let error;

    try {
      result = await this.connection.query(query, values);
    } catch (e) {
      error = e;

      console.log(e);
    }

    if (error) {
      throw Error(error);
    }

    return result;
  }

  public async insert<A extends Tables>(table: A, data: Partial<TablesSpec[A]>) {
    const { keys, values, indexes } = this.prepareForInsert(data);

    return await this.query<TablesSpec[A][]>(
      `INSERT INTO ${table}(${keys.join(', ')}) VALUES(${indexes.join(', ')}) RETURNING *`,
      values,
    );
  }

  public async find<A extends Tables>(table: A, data: Partial<TablesSpec[A]>) {
    const { where, values } = this.prepareForGet(data);

    return await this.query<TablesSpec[A][]>(
      `SELECT * FROM ${table} WHERE ${where}`,
      values,
    );
  }

  public async delete<A extends Tables>(table: A, data: Partial<TablesSpec[A]>)  {
    const { where, values } = this.prepareForGet(data);

    return await this.query<[TablesSpec[A][], number]>(
      `DELETE FROM ${table} WHERE ${where} RETURNING *`,
      values,
    );
  }

  private async createConnection() {
    if (!this.connection) {
      this.connection = await createConnection();
      console.log('Connected PostgreSQL');
    }
  }
}
