import * as dotenv from 'dotenv';

dotenv.config({ path: './env/.env' });

export class DatabaseConfig {
  public static readonly DB_HOST: string = process.env.DB_HOST || '';
  public static readonly DB_PORT: number = parseInt(process.env.DB_PORT || '', 10) || 0; // ParseInt possibly return NaN when error occurred
  public static readonly DB_USERNAME: string = process.env.DB_USERNAME || '';
  public static readonly DB_PASSWORD: string = process.env.DB_PASSWORD || '';
  public static readonly DB_NAME: string = process.env.DB_NAME || '';

  public static readonly MONGO_INITDB_HOST: string = process.env.MONGO_INITDB_HOST || '';
  public static readonly MONGO_INITDB_PORT: number = parseInt(process.env.MONGO_INITDB_PORT || '', 10) || 0;
  public static readonly MONGO_INITDB_NAME: string = process.env.MONGO_INITDB_NAME || '';
  public static readonly MONGO_INITDB_ROOT_USERNAME: string = process.env.MONGO_INITDB_ROOT_USERNAME || '';
  public static readonly MONGO_INITDB_ROOT_PASSWORD: string = process.env.MONGO_INITDB_ROOT_PASSWORD || '';
}
