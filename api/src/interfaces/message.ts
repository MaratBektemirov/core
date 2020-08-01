export enum MessageStatus {
  unread,
  read,
  answered
}

export interface Message {
  id: number;
  senderId: number;
  recipientId: number;
  text: string;
  createdAt: Date;
  status: MessageStatus;
}
