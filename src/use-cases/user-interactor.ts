import User from '../entities/user'
import { UserRepository } from './user-repository'
import { CreateUserInputData } from './input-data/user-input-data'
import { CreateUserOutputData } from './output-data/user-output-data'

class UserInteractor {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public getAllUsers(): User[] {
    return this.userRepository.getAll()
  }

  public createUser(input: CreateUserInputData): User {
    const newUser = new User(input.name, input.email, input.password)
    const output: CreateUserOutputData = this.userRepository.create(newUser)
    return output
  }
}

export default UserInteractor
