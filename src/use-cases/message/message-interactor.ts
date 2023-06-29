import { MessageUseCaseDto } from './message-usecase-dto';
import { MessageRepository } from './message-repository';
import { GetMessagePort } from './get-message-port';

class GetMessagesInteractor {
  private messageRepository: MessageRepository;

  constructor(messageRepository: MessageRepository) {
    this.messageRepository = messageRepository;
  }

  public async getAll(payload: GetMessagePort): Promise<MessageUseCaseDto[]> {
    const { senderId, recipientId } = payload;
    const messages = await this.messageRepository.getMessages(senderId, recipientId);
    return MessageUseCaseDto.newListFromMessages(messages);
  }
}

export default GetMessagesInteractor;
