import { Entity } from './entity';

export interface UnmarshalledMessage {
  id?: string;
  conversationId?: string;
  senderId: number;
  recipientId: number;
  content: string;
}

export class Message extends Entity<UnmarshalledMessage> {
  constructor(props: UnmarshalledMessage) {
    const { id, ...data } = props;
    super(data, id);
  }

  public static async new(props: UnmarshalledMessage): Promise<Message> {
    const instance = new Message(props);
    return instance;
  }

  public unmarshall(): UnmarshalledMessage {
    return {
      id: this.id,
      conversationId: this.id,
      senderId: this.props.senderId,
      recipientId: this.props.recipientId,
      content: this.props.content,
    };
  }

  get id(): string | undefined {
    return this._id ? this._id : undefined;
  }

  get conversationId(): string | undefined {
    return this.props.conversationId;
  }

  get senderId(): number {
    return this.props.senderId;
  }

  get recipientId(): number {
    return this.props.recipientId;
  }

  get content(): string {
    return this.props.content;
  }
}
