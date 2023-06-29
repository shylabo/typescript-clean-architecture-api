import { GetUserPort } from '../../use-cases/user/get-user-port';
import { Exclude, Expose, plainToClass } from 'class-transformer';

@Exclude()
export class GetUserAdapter implements GetUserPort {
  @Expose() public id: number;

  public static async new(payload: GetUserPort): Promise<GetUserAdapter> {
    const adapter: GetUserAdapter = plainToClass(GetUserAdapter, payload);

    return adapter;
  }
}
