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
