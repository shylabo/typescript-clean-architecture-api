import { UnmarshalledUser, User } from '../../entities/user'
import { UserRepository } from '../../use-cases/user-repository'
import { UserMapper } from './mappers/user-mapper'

interface UserDataSource {
  getAll(): Promise<User[]>
  create(user: UnmarshalledUser): Promise<User>
}

class UserRepositoryImpl implements UserRepository {
  private userDataSource: UserDataSource

  constructor(userDataSource: UserDataSource) {
    this.userDataSource = userDataSource
  }

  async getAll(): Promise<User[]> {
    const fetchedUsers = await this.userDataSource.getAll()
    return fetchedUsers
  }

  async create(user: User): Promise<User> {
    try {
      const dtoUser = user.unmarshall()
      const created = await this.userDataSource.create(dtoUser)
      return UserMapper.toDomain(created)
    } catch (err) {
      throw new Error('Error occurred')
    }
  }
}

export default UserRepositoryImpl
