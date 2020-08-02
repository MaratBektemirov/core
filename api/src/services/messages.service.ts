import { Injectable } from '@nestjs/common';
import { DbService } from '@api/services/db.service';

@Injectable()
export class MessagesService {
  constructor(private db: DbService) {}
}
