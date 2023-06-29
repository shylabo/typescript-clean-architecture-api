import { Document, MongoClient, ObjectId, WithId } from 'mongodb';
import { DatabaseConfig } from '../../config/database-config';
import { NoSQLDatabaseClient } from '../nosql-database-client';

export interface NoSQLDBClientConfig {
  host: string;
  port: number;
  database: string;
  collection: string;
  userName: string;
  password: string;
}

export class MongoDBClient implements NoSQLDatabaseClient {
  private client: MongoClient;
  private dbName: string;
  private collection: string;

  constructor(config: NoSQLDBClientConfig) {
    this.client = new MongoClient(`mongodb://${config.host}:${config.port}/`, {
      auth: {
        username: config.userName,
        password: config.password,
      },
    });
    this.dbName = config.database;
    this.collection = config.collection;
  }

  public static async newFromConfig(collectionName: string): Promise<MongoDBClient> {
    const dbClient: MongoDBClient = new MongoDBClient({
      host: DatabaseConfig.MONGO_INITDB_HOST,
      port: DatabaseConfig.MONGO_INITDB_PORT,
      database: DatabaseConfig.MONGO_INITDB_NAME,
      collection: collectionName,
      userName: DatabaseConfig.MONGO_INITDB_ROOT_USERNAME,
      password: DatabaseConfig.MONGO_INITDB_ROOT_PASSWORD,
    });

    return dbClient;
  }

  public async find(query: object): Promise<WithId<Document>[]> {
    await this.client.connect();
    const results: Promise<WithId<Document>[]> = this.client
      .db(this.dbName)
      .collection(this.collection)
      .find(query)
      .toArray();
    return results;
  }

  public async insertOne(doc: object): Promise<void> {
    await this.client.connect();
    this.client.db(this.dbName).collection(this.collection).insertOne(doc);
  }

  public async updateOne(id: ObjectId, data: object): Promise<void> {
    await this.client.connect();
    this.client.db(this.dbName).collection(this.collection).updateOne({ _id: id }, { $set: data });
  }

  public async deleteOne(id: ObjectId): Promise<void> {
    await this.client.connect();
    this.client.db(this.dbName).collection(this.collection).deleteOne({ _id: id });
  }
}
