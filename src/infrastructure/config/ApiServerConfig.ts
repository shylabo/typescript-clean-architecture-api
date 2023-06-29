import * as dotenv from 'dotenv';

dotenv.config({ path: './env/.env' });

export class ApiServerConfig {
  public static readonly API_HOST: string = process.env.API_HOST || '';
  public static readonly API_PORT: number = parseInt(process.env.API_PORT || '', 10) || 0; // ParseInt possibly return NaN when error occurred
}
