import { Document, WithId } from 'mongodb';
import { Message } from '../../../entities/message';

export class MessageMapper {
  public static toDomainEntity(raw: WithId<Document>): Message {
    return new Message({
      id: raw._id.toString(),
      conversationId: raw.conversationId,
      senderId: raw.senderId,
      recipientId: raw.recipientId,
      content: raw.content,
    });
  }

  public static toDomainEntities(raws: WithId<Document>[]): Message[] {
    return raws.map((raw) => this.toDomainEntity(raw));
  }
}
