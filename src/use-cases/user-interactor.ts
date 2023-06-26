import { User } from '../entities/user'
import { UserRepository } from './user-repository'

class UserInteractor {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public getAll(): Promise<User[]> {
    const users = this.userRepository.getUsers()
    return users
  }

  public async createUser(input: User): Promise<User> {
    const newUser = await User.new(input)
    const createdUser = await this.userRepository.createUser(newUser)
    return createdUser
  }
}

export default UserInteractor
