import { User } from '../entities/user'
export interface UserRepository {
  getUsers(): Promise<User[]>
  createUser(user: User): Promise<User>
}
