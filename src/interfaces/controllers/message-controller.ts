import { Request, Response } from 'express';
import MessageRepositoryImpl from '../gateways/message-repository';
import { ApiResponse } from '../common/api/api-response';
import MessageInteractor from '../../use-cases/message-interactor';
import { Message } from '../../entities/message';
import { Meta } from '../common/api/meta';
import { NoSQLDatabaseClient } from '../gateways/database/db_client';
import Logger from '../../infrastructure/logger';

class MessageController {
  private messageRepository: MessageRepositoryImpl;
  private messageInteractor: MessageInteractor;

  constructor(dbClient: NoSQLDatabaseClient) {
    this.messageRepository = new MessageRepositoryImpl(dbClient);
    this.messageInteractor = new MessageInteractor(this.messageRepository);

    this.getMessages = this.getMessages.bind(this);
  }

  async getMessages(req: Request, res: Response) {
    try {
      const { senderId, recipientId } = req.query;
      const messages = await this.messageInteractor.getAll(
        parseInt(senderId as string, 10),
        parseInt(recipientId as string, 10),
      );
      const response: ApiResponse<Message[]> = ApiResponse.success(messages);
      res.json(response);
    } catch (err: any) {
      Logger.getInstance().error('Error occurred: ', err);
      const response: ApiResponse<unknown> = ApiResponse.error(
        Meta.STATUS_INTERNAL_SERVER_ERROR.code,
        err.message,
      );
      res.json(response);
    }
  }
}

export default MessageController;
