import { User } from '../../domain/user/entity/user';
import { UserUseCaseDto } from '../../domain/user/usecase/dto/user-usecase-dto';
import { UserRepository } from '../../domain/user/port/persistence/user-repository';
import { CreateUserPort } from '../../domain/user/port/usecase/create-user-port';
import { CreateUserUseCase } from '../../../core/domain/user/usecase/create-user-usecase';

class CreateUserInteractor implements CreateUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute(payload: CreateUserPort): Promise<UserUseCaseDto> {
    const newUser: User = await User.new(payload);
    const createdUser: User = await this.userRepository.createUser(newUser);

    return UserUseCaseDto.newFromUser(createdUser);
  }
}

export default CreateUserInteractor;
