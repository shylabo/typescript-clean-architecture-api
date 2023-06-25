import { UserDataSource } from '../../interfaces/data-sources/user-data-wrapper'
import { SQLDatabaseWrapper } from '../../interfaces/data-sources/sql-database-wrapper'
import { UnmarshalledUser, User } from '../../../../entities/user'
import { Pool } from 'pg'
import { DatabaseConfig } from '../../../config/database-config'

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

const DB_TABLE = 'external.users'

export class PGUserDataSource implements UserDataSource {
  private db: SQLDatabaseWrapper
  constructor(db: SQLDatabaseWrapper) {
    this.db = db
  }

  async getAll(): Promise<User[]> {
    const dbResponse = await this.db.query(`select * from ${DB_TABLE}`)
    const result = dbResponse.rows.map((user) => User.create(user))
    return result
  }

  async create(user: UnmarshalledUser) {
    const dbResponse = await this.db.query(
      `insert into ${DB_TABLE} (name, email, password) values($1)`,
      [user.name, user.email, user.password]
    )
    const result = dbResponse.rows.map((user) => User.create(user))
    return result[0]
  }
}
