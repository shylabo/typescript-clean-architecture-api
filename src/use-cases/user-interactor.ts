import User from '../entities/user'
import { UserRepository } from './user-repository'

class UserInteractor {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public getAllUsers(): User[] {
    return this.userRepository.getAll()
  }

  public createUser(name: string, email: string, password: string): User {
    const newUser = new User(name, email, password)
    this.userRepository.create(newUser)
    return newUser
  }
}

export default UserInteractor
