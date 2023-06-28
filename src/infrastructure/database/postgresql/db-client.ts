import { Pool, PoolClient } from 'pg';
import Logger from '../../logger';
import { DatabaseConfig } from '../../config/database-config';
import { SQLDatabaseClient } from '../sql-database-client';

export interface TestDBClientConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

export class TestDBClient implements SQLDatabaseClient {
  private pool: Pool;

  constructor(config: TestDBClientConfig) {
    this.pool = new Pool({
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password,
      database: config.database,
    });
  }

  public static async newFromConfig(): Promise<TestDBClient> {
    const dbClient = new TestDBClient({
      host: DatabaseConfig.DB_HOST,
      port: DatabaseConfig.DB_PORT,
      user: DatabaseConfig.DB_USERNAME,
      password: DatabaseConfig.DB_PASSWORD,
      database: DatabaseConfig.DB_NAME,
    });
    return dbClient;
  }

  public async executeQuery(query: string, params: any[] = []): Promise<{ rows: any[] }> {
    const client = await this.pool.connect();
    try {
      const result = await client.query(query, params);
      return result;
    } finally {
      client.release();
    }
  }

  public async executeTransaction(callback: (client: PoolClient) => Promise<any>): Promise<any> {
    const client = await this.pool.connect();
    const transaction = new TransactionWrapper(client);

    try {
      await transaction.begin();
      const result = await callback(transaction.client);
      await transaction.commit();
      return result;
    } catch (err) {
      await transaction.rollback();
      Logger.getInstance().error('Error occurred in transaction: ', err);
      throw err;
    } finally {
      transaction.release();
    }
  }
}

class TransactionWrapper {
  public readonly client: PoolClient;

  constructor(client: PoolClient) {
    this.client = client;
  }

  async begin(): Promise<void> {
    await this.client.query('BEGIN');
  }

  async commit(): Promise<void> {
    await this.client.query('COMMIT');
  }

  async rollback(): Promise<void> {
    await this.client.query('ROLLBACK');
  }

  public release(): void {
    this.client.release();
  }
}
