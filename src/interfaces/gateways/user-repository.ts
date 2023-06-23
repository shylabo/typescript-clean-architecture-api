import User from '../../entities/user'
import { UserRepository } from '../../use-cases/user-repository'

class UserRepositoryImpl implements UserRepository {
  private users: User[]

  constructor() {
    this.users = []
  }

  public getAll(): User[] {
    return this.users
  }

  public create(user: User): User {
    try {
      this.users.push(user)
      return user
    } catch (err) {
      throw new Error('Error occurred')
    }
  }
}

export default UserRepositoryImpl
