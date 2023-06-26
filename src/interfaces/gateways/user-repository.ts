import { User } from '../../entities/user'
import { UserRepository } from '../../use-cases/user-repository'
import { SQLDatabaseClient } from './database/db_client'
import { UserMapper } from './mappers/user-mapper'

const DB_TABLE = 'conceptual.users'
const DB_VIEW = 'external.users'

class UserRepositoryImpl implements UserRepository {
  private dbClient: SQLDatabaseClient

  constructor(dbClient: SQLDatabaseClient) {
    this.dbClient = dbClient
  }

  async getUsers(): Promise<User[]> {
    try {
      const dbResponse = await this.dbClient.executeQuery(`select * from ${DB_VIEW}`)
      const result = UserMapper.toDomainEntities(dbResponse.rows)
      return result
    } catch (err: any) {
      throw new Error(`Error occurred: ${err.message}`)
    }
  }

  async createUser(user: User): Promise<User> {
    try {
      const dtoUser = user.unmarshall()
      await this.dbClient.executeQuery(
        `insert into ${DB_TABLE} (name, email, password) values($1, $2, $3)`,
        [dtoUser.name, dtoUser.email, dtoUser.password]
      )

      const dbResponse = await this.dbClient.executeQuery(
        `select * from ${DB_VIEW} where email = $1`,
        [dtoUser.email]
      )

      const createdUser = UserMapper.toDomainEntity(dbResponse.rows[0])

      return createdUser
    } catch (err: any) {
      throw new Error(`Error occurred: ${err.message}`)
    }
  }
}

export default UserRepositoryImpl
