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

  public create(user: User): void {
    this.users.push(user)
  }
}

export default UserRepositoryImpl
