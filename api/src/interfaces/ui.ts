import { IUser } from '@interfaces/user';
import { Message } from '@interfaces/message';

export interface UserUI extends Omit<IUser, 'password'> {

}

export interface MessageUI extends Message {
  recipientName: string;
}
