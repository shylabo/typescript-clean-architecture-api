import { UserUseCaseDto } from './user-usecase-dto';
import { UserRepository } from './user-repository';
import { GetUserPort } from './get-user-port';

class GetUserInteractor {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async getUserById(payload: GetUserPort): Promise<UserUseCaseDto> {
    const fetchedUser = await this.userRepository.getUserById(payload.id);
    return UserUseCaseDto.newFromUser(fetchedUser);
  }
}

export default GetUserInteractor;
