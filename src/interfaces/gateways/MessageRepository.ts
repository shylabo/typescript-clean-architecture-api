import { Message } from '../../core/domain/message/entity/Message';
import { MessageRepository } from '../../core/domain/message/port/persistence/MessageRepository';
import { NoSQLDatabaseClient } from './database/DbClient';
import { MessageMapper } from './mappers/MessageMapper';

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
