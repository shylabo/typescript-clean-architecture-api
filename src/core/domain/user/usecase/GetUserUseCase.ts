import { UserUseCaseDto } from './dto/UserUseCaseDto';
import { GetUserPort } from '../port/usecase/GetUserPort';
import { UseCase } from '../../../common/Usecase';

export interface GetUserUseCase extends UseCase<GetUserPort, UserUseCaseDto> {
  execute(payload: GetUserPort): Promise<UserUseCaseDto>;
}
