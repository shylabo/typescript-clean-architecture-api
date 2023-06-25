import { User } from '../entities/user'
import { UserRepository } from './user-repository'

class UserInteractor {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public getAll(): Promise<User[]> {
    const users = this.userRepository.getAll()
    return users
  }

  public createUser(input: User): Promise<User> {
    const newUser = User.create(input)
    return this.userRepository.create(newUser)
  }
}

export default UserInteractor
