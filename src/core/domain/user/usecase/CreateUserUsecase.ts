import { UserUseCaseDto } from './dto/UserUseCaseDto';
import { CreateUserPort } from '../port/usecase/CreateUserPort';
import { UseCase } from '../../../common/Usecase';

export interface CreateUserUseCase extends UseCase<CreateUserPort, UserUseCaseDto> {
  execute(payload: CreateUserPort): Promise<UserUseCaseDto>;
}
