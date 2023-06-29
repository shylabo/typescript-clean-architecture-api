import { CreateUserPort } from '../../core/domain/user/port/usecase/CreateUserPort';
import { Exclude, Expose, plainToClass } from 'class-transformer';

@Exclude()
export class CreateUserAdapter implements CreateUserPort {
  @Expose() public name: string;
  @Expose() public email: string;
  @Expose() public password: string;

  public static async new(payload: CreateUserPort): Promise<CreateUserAdapter> {
    const adapter: CreateUserAdapter = plainToClass(CreateUserAdapter, payload);

    return adapter;
  }
}
