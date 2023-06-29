import { UserUseCaseDto } from './dto/user-usecase-dto';
import { CreateUserPort } from '../port/usecase/create-user-port';
import { UseCase } from '../../../../core/common/usecase';

export interface CreateUserUseCase extends UseCase<CreateUserPort, UserUseCaseDto> {
  execute(payload: CreateUserPort): Promise<UserUseCaseDto>;
}
