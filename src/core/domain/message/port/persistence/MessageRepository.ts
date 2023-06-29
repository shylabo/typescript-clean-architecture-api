import { Message } from '../../entity/Message';
export interface MessageRepository {
  getMessages(senderId: number, recipientId: number): Promise<Message[]>;
}
