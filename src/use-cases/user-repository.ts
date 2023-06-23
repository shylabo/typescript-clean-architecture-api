import User from '../entities/user'

export interface UserRepository {
  getAll(): User[]
  create(user: User): User
}
