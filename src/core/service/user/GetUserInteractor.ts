import { UserUseCaseDto } from '../../domain/user/usecase/dto/UserUseCaseDto';
import { UserRepository } from '../../domain/user/port/persistence/UserRepository';
import { GetUserPort } from '../../domain/user/port/usecase/GetUserPort';
import { User } from '../../domain/user/entity/User';
import { GetUserUseCase } from '../../domain/user/usecase/GetUserUseCase';

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
