import { Entity } from './entity';
import { Nullable } from '../shared/type';

export interface CreateMessageEntityPayload {
  conversationId?: string;
  senderId: number;
  recipientId: number;
  content: string;
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export class Message extends Entity<string> {
  private conversationId?: string;
  private senderId: number;
  private recipientId: number;
  private content: string;
  private readonly createdAt: Date;
  private updatedAt: Date;
  private deletedAt: Nullable<Date>;

  constructor(payload: CreateMessageEntityPayload) {
    super();

    this.conversationId = payload.conversationId || undefined;
    this.senderId = payload.senderId;
    this.recipientId = payload.recipientId;
    this.content = payload.content;

    this.id = payload.id || undefined;
    this.createdAt = payload.createdAt || new Date();
    this.updatedAt = payload.createdAt || new Date();
    this.deletedAt = payload.deletedAt || null;
  }

  public getSenderId(): number {
    return this.senderId;
  }

  public getConversationId(): string | undefined {
    return this.conversationId;
  }

  public getRecipientId(): number {
    return this.recipientId;
  }

  public getContent(): string {
    return this.content;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Nullable<Date> {
    return this.updatedAt;
  }

  public getDeletedAt(): Nullable<Date> {
    return this.deletedAt;
  }

  public static async new(payload: CreateMessageEntityPayload): Promise<Message> {
    const message = new Message(payload);

    return message;
  }
}