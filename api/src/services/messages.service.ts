import { Injectable } from '@nestjs/common';
import { DbService } from '@api/services/db.service';
import { Message } from '@interfaces/message';

@Injectable()
export class MessagesService {
  constructor(private dbService: DbService) {}

  public async createMessage(message: Message) {
    const { keys, values, indexes } = this.dbService.prepareForInsert(message);

    return await this.dbService.query(
      `INSERT INTO messages(${keys.join(', ')}) VALUES(${indexes.join(', ')})`,
      values
    );
  }

  public async find(message: Message): Promise<Message[]> {
    const { where, values } = this.dbService.prepareForGet(message);

    return await this.dbService.query(
      `SELECT * FROM messages WHERE ${where}`,
      values
    );
  }
}
