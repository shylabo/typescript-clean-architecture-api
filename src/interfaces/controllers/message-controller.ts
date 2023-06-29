import { Request, Response } from 'express';
import { ApiResponse } from '../../core/common/api-response';
import MessageRepositoryImpl from '../gateways/message-repository';
import { NoSQLDatabaseClient } from '../gateways/database/db_client';
import { GetMessageAdapter } from '../adapters/CreateMessageAdapter';
import GetMessagesInteractor from '../../core/service/message/get-messages-interactor';
import { MessageUseCaseDto } from '../../core/domain/message/usecase/dto/message-usecase-dto';
import { GetMessagesUseCase } from '../../core/domain/message/usecase/get-messages-usecase';

class MessageController {
  private messageRepository: MessageRepositoryImpl;
  private getMessagesService: GetMessagesUseCase;

  constructor(dbClient: NoSQLDatabaseClient) {
    this.messageRepository = new MessageRepositoryImpl(dbClient);
    this.getMessagesService = new GetMessagesInteractor(this.messageRepository);

    this.getMessages = this.getMessages.bind(this);
  }

  async getMessages(req: Request, res: Response) {
    const adapter: GetMessageAdapter = await GetMessageAdapter.new({
      senderId: parseInt(req.query.senderId as string, 10),
      recipientId: parseInt(req.query.recipientId as string, 10),
    });
    const messages: MessageUseCaseDto[] = await this.getMessagesService.execute(adapter);
    const response: ApiResponse<MessageUseCaseDto[]> = ApiResponse.success(messages);
    res.json(response);
  }
}

export default MessageController;
