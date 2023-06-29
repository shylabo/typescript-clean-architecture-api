import { Message } from '../../entity/message';
export interface MessageRepository {
  getMessages(senderId: number, recipientId: number): Promise<Message[]>;
}
