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
    try {
      const fetchedUsers = await this.userDataSource.getAll()
      return fetchedUsers
    } catch (err: any) {
      throw new Error(`Error occurred: ${err.message}`)
    }
  }

  async create(user: User): Promise<User> {
    try {
      const dtoUser = user.unmarshall()
      const created = await this.userDataSource.create(dtoUser)
      return created
    } catch (err: any) {
      throw new Error(`Error occurred: ${err.message}`)
    }
  }
}

export default UserRepositoryImpl
