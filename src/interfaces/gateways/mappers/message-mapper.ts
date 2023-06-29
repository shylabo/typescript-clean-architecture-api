import { Document, WithId } from 'mongodb';
import { Message } from '../../../core/domain/message/entity/message';

export class MessageMapper {
  public static toDomainEntity(raw: WithId<Document>): Message {
    const domainMessage = new Message({
      conversationId: raw.conversationId,
      senderId: raw.senderId,
      recipientId: raw.recipientId,
      content: raw.content,
      id: raw._id.toString(),
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      deletedAt: raw.deletedAt,
    });

    return domainMessage;
  }

  public static toDomainEntities(raws: WithId<Document>[]): Message[] {
    return raws.map((raw) => this.toDomainEntity(raw));
  }
}
