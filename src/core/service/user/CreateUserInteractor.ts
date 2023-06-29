import { User } from '../../domain/user/entity/User';
import { UserUseCaseDto } from '../../domain/user/usecase/dto/UserUseCaseDto';
import { UserRepository } from '../../domain/user/port/persistence/UserRepository';
import { CreateUserPort } from '../../domain/user/port/usecase/CreateUserPort';
import { CreateUserUseCase } from '../../domain/user/usecase/CreateUserUsecase';

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
