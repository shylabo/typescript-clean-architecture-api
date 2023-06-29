import { MessageUseCaseDto } from '../../domain/message/usecase/dto/MessageUseCaseDto';
import { MessageRepository } from '../../domain/message/port/persistence/MessageRepository';
import { GetMessagePort } from '../../domain/message/port/usecase/GetMessagePort';
import { GetMessagesUseCase } from '../../domain/message/usecase/GetMessagesUseCase';
import { Message } from '../../domain/message/entity/Message';

class GetMessagesInteractor implements GetMessagesUseCase {
  private messageRepository: MessageRepository;

  constructor(messageRepository: MessageRepository) {
    this.messageRepository = messageRepository;
  }

  public async execute(payload: GetMessagePort): Promise<MessageUseCaseDto[]> {
    const { senderId, recipientId } = payload;
    const messages: Message[] = await this.messageRepository.getMessages(senderId, recipientId);
    return MessageUseCaseDto.newListFromMessages(messages);
  }
}

export default GetMessagesInteractor;
