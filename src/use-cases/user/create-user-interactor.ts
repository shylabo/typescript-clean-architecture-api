import { User } from '../../entities/user';
import { UserUseCaseDto } from './user-usecase-dto';
import { UserRepository } from './user-repository';
import { CreateUserPort } from './create-user-port';

class CreateUserInteractor {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async createUser(payload: CreateUserPort): Promise<UserUseCaseDto> {
    const newUser = await User.new(payload);
    const createdUser = await this.userRepository.createUser(newUser);

    return UserUseCaseDto.newFromUser(createdUser);
  }
}

export default CreateUserInteractor;
