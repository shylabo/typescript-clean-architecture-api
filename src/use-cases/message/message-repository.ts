import { Message } from '../../entities/message';
export interface MessageRepository {
  getMessages(senderId: number, recipientId: number): Promise<Message[]>;
}
