import { Message } from '../../entity/Message';
import { Exclude, Expose, plainToClass } from 'class-transformer';

@Exclude()
export class MessageUseCaseDto {
  @Expose() public id: string;
  @Expose() public conversationId: string;
  @Expose() public senderId: string;
  @Expose() public recipientId: string;
  @Expose() public content: string;

  public static newFromMessage(message: Message): MessageUseCaseDto {
    return plainToClass(MessageUseCaseDto, message);
  }

  public static newListFromMessages(users: Message[]): MessageUseCaseDto[] {
    return users.map((message) => this.newFromMessage(message));
  }
}
