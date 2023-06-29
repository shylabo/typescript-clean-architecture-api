import { UserUseCaseDto } from './dto/user-usecase-dto';
import { GetUserPort } from '../port/usecase/get-user-port';
import { UseCase } from '../../../common/usecase';

export interface GetUserUseCase extends UseCase<GetUserPort, UserUseCaseDto> {
  execute(payload: GetUserPort): Promise<UserUseCaseDto>;
}
