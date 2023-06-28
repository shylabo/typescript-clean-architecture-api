import { Message } from '../entities/message';
import { MessageRepository } from './message-repository';

class MessageInteractor {
  private messageRepository: MessageRepository;

  constructor(messageRepository: MessageRepository) {
    this.messageRepository = messageRepository;
  }

  public getAll(senderId: number, recipientId: number): Promise<Message[]> {
    const messages = this.messageRepository.getMessages(senderId, recipientId);
    return messages;
  }
}

export default MessageInteractor;
