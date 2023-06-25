import { UnmarshalledUser, User } from '../../../../entities/user'

export interface UserDataSource {
  getAll(): Promise<User[]>
  create(user: UnmarshalledUser): Promise<User>
}
