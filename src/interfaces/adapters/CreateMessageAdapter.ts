import { GetMessagePort } from '../../use-cases/message/get-message-port';
import { Exclude, Expose, plainToClass } from 'class-transformer';

@Exclude()
export class GetMessageAdapter implements GetMessagePort {
  @Expose() public senderId: number;
  @Expose() public recipientId: number;

  public static async new(payload: GetMessagePort): Promise<GetMessageAdapter> {
    const adapter: GetMessageAdapter = plainToClass(GetMessageAdapter, payload);

    return adapter;
  }
}