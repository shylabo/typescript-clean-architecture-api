import { UserDataSource } from '../../interfaces/data-sources/user-data-wrapper'
import { SQLDatabaseWrapper } from '../../interfaces/data-sources/sql-database-wrapper'
import { UnmarshalledUser, User } from '../../../../entities/user'
import { Pool } from 'pg'
import * as dotenv from 'dotenv'

dotenv.config({ path: './env/.env' })

export async function getUserDataSource() {
  const db = new Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT!, 10),
  })
  return new PGUserDataSource(db)
}

const DB_TABLE = 'conceptual.user'

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
