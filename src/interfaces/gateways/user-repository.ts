import { User } from '../../entities/user';
import { UserRepository } from '../../use-cases/user/user-repository';
import { SQLDatabaseClient } from './database/db_client';
import { UserMapper } from './mappers/user-mapper';

const DB_TABLE = 'conceptual.users';
const DB_VIEW = 'external.users';

class UserRepositoryImpl implements UserRepository {
  private dbClient: SQLDatabaseClient;

  constructor(dbClient: SQLDatabaseClient) {
    this.dbClient = dbClient;
  }

  async getUserById(id: number): Promise<User> {
    try {
      const dbResponse = await this.dbClient.executeQuery(`select * from ${DB_VIEW} where id = $1`, [id]);
      const result = UserMapper.toDomainEntity(dbResponse.rows[0]);
      return result;
    } catch (err: any) {
      throw new Error(`Error occurred: ${err.message}`);
    }
  }

  async createUser(user: User): Promise<User> {
    try {
      await this.dbClient.executeQuery(`insert into ${DB_TABLE} (name, email, password) values($1, $2, $3)`, [
        user.getName(),
        user.getEmail(),
        user.getPassword(),
      ]);

      const dbResponse = await this.dbClient.executeQuery(`select * from ${DB_VIEW} where email = $1`, [
        user.getEmail(),
      ]);

      const createdUser = UserMapper.toDomainEntity(dbResponse.rows[0]);

      return createdUser;
    } catch (err: any) {
      throw new Error(`Error occurred: ${err.message}`);
    }
  }
}

export default UserRepositoryImpl;
