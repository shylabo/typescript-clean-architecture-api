import { User } from '../entities/user'
export interface UserRepository {
  getAll(): Promise<User[]>
  create(user: User): Promise<User>
}
