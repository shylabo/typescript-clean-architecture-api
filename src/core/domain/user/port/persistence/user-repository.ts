import { User } from '../../entity/user';
export interface UserRepository {
  getUserById(id: number): Promise<User>;
  createUser(user: User): Promise<User>;
}
