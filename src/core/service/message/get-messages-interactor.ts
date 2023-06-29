import { MessageUseCaseDto } from '../../../core/domain/message/usecase/dto/message-usecase-dto';
import { MessageRepository } from '../../../core/domain/message/port/persistence/message-repository';
import { GetMessagePort } from '../../../core/domain/message/port/usecase/get-message-port';
import { GetMessagesUseCase } from '../../../core/domain/message/usecase/get-messages-usecase';
import { Message } from '../../domain/message/entity/message';

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
