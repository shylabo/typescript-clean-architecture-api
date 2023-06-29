import { User } from '../../entity/User';
export interface UserRepository {
  getUserById(id: number): Promise<User>;
  createUser(user: User): Promise<User>;
}
