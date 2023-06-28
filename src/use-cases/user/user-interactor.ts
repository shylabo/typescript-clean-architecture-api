import { CreateUserEntityPayload, User } from '../../entities/user';
import { UserUseCaseDto } from './user-usecase-dto';
import { UserRepository } from './user-repository';

class UserInteractor {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async getAll(): Promise<UserUseCaseDto[]> {
    const fetchedUsers = await this.userRepository.getUsers();
    return UserUseCaseDto.newListFromUsers(fetchedUsers);
  }

  public async createUser(payload: CreateUserEntityPayload): Promise<UserUseCaseDto> {
    const newUser = await User.new(payload);
    const createdUser = await this.userRepository.createUser(newUser);

    return UserUseCaseDto.newFromUser(createdUser);
  }
}

export default UserInteractor;
