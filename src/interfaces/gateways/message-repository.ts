import { Message } from '../../entities/message';
import { MessageRepository } from '../../use-cases/message/message-repository';
import { NoSQLDatabaseClient } from './database/db_client';
import { MessageMapper } from './mappers/message-mapper';

class MessageRepositoryImpl implements MessageRepository {
  private dbClient: NoSQLDatabaseClient;

  constructor(dbClient: NoSQLDatabaseClient) {
    this.dbClient = dbClient;
  }

  async getMessages(senderId: number, recipientId: number): Promise<Message[]> {
    try {
      const dbResponse = await this.dbClient.find({
        senderId: senderId,
        recipientId: recipientId,
      });
      const result = MessageMapper.toDomainEntities(dbResponse);
      return result;
    } catch (err: any) {
      throw new Error(`Error occurred: ${err.message}`);
    }
  }
}

export default MessageRepositoryImpl;
