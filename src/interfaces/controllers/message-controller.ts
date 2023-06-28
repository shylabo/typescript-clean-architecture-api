import { Request, Response } from 'express';
import { ApiResponse } from '../common/api/api-response';
import MessageRepositoryImpl from '../gateways/message-repository';
import { NoSQLDatabaseClient } from '../gateways/database/db_client';
import { GetMessageAdapter } from '../adapters/CreateMessageAdapter';
import MessageInteractor from '../../use-cases/message/message-interactor';
import { MessageUseCaseDto } from '../../use-cases/message/message-usecase-dto';

class MessageController {
  private messageRepository: MessageRepositoryImpl;
  private messageInteractor: MessageInteractor;

  constructor(dbClient: NoSQLDatabaseClient) {
    this.messageRepository = new MessageRepositoryImpl(dbClient);
    this.messageInteractor = new MessageInteractor(this.messageRepository);

    this.getMessages = this.getMessages.bind(this);
  }

  async getMessages(req: Request, res: Response) {
    const adapter: GetMessageAdapter = await GetMessageAdapter.new({
      senderId: parseInt(req.query.senderId as string, 10),
      recipientId: parseInt(req.query.recipientId as string, 10),
    });
    const messages = await this.messageInteractor.getAll(adapter);
    const response: ApiResponse<MessageUseCaseDto[]> = ApiResponse.success(messages);
    res.json(response);
  }
}

export default MessageController;