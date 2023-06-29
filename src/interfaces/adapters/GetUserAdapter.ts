import { GetUserPort } from '../../core/domain/user/port/usecase/get-user-port';
import { Exclude, Expose, plainToClass } from 'class-transformer';

@Exclude()
export class GetUserAdapter implements GetUserPort {
  @Expose() public id: number;

  public static async new(payload: GetUserPort): Promise<GetUserAdapter> {
    const adapter: GetUserAdapter = plainToClass(GetUserAdapter, payload);

    return adapter;
  }
}
