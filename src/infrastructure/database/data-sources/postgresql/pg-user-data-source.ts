import { Pool } from 'pg'
import { UserDataSource } from '../../interfaces/data-sources/user-data-wrapper'
import { SQLDatabaseWrapper } from '../../interfaces/data-sources/sql-database-wrapper'
import { UnmarshalledUser, User } from '../../../../entities/user'
import { DatabaseConfig } from '../../../config/database-config'
import { UserMapper } from '../../../../interfaces/gateways/mappers/user-mapper'

export async function getUserDataSource() {
  const db = new Pool({
    host: DatabaseConfig.DB_HOST,
    port: DatabaseConfig.DB_PORT,
    user: DatabaseConfig.DB_USERNAME,
    password: DatabaseConfig.DB_PASSWORD,
    database: DatabaseConfig.DB_NAME,
  })
  return new PGUserDataSource(db)
}

const DB_TABLE = 'conceptual.users'
const DB_VIEW = 'external.users'

export class PGUserDataSource implements UserDataSource {
  private db: SQLDatabaseWrapper
  constructor(db: SQLDatabaseWrapper) {
    this.db = db
  }

  async getAll(): Promise<User[]> {
    const dbResponse = await this.db.query(`select * from ${DB_VIEW}`)
    const result = UserMapper.toDomainEntities(dbResponse.rows)
    return result
  }

  async create(user: UnmarshalledUser): Promise<User> {
    await this.db.query(`insert into ${DB_TABLE} (name, email, password) values($1, $2, $3)`, [
      user.name,
      user.email,
      user.password,
    ])
    const dbResponse = await this.db.query(`select * from ${DB_VIEW} where email = $1`, [
      user.email,
    ])
    const createdUser = UserMapper.toDomainEntity(dbResponse.rows[0])
    return createdUser
  }
}
