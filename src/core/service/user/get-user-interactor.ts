import { UserUseCaseDto } from '../../domain/user/usecase/dto/user-usecase-dto';
import { UserRepository } from '../../domain/user/port/persistence/user-repository';
import { GetUserPort } from '../../domain/user/port/usecase/get-user-port';
import { User } from '../../domain/user/entity/user';
import { GetUserUseCase } from '../../../core/domain/user/usecase/get-user-usecase';

class GetUserInteractor implements GetUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute(payload: GetUserPort): Promise<UserUseCaseDto> {
    const fetchedUser: User = await this.userRepository.getUserById(payload.id);
    return UserUseCaseDto.newFromUser(fetchedUser);
  }
}

export default GetUserInteractor;
