import { Document, ObjectId, WithId } from 'mongodb';
export interface SQLDatabaseClient {
  executeQuery(query: string, params?: any[]): Promise<{ rows: any[] }>;
  executeTransaction(callback: (client: any) => Promise<any>): Promise<any>;
}

export interface NoSQLDatabaseClient {
  find(query: object): Promise<WithId<Document>[]>;
  insertOne(doc: any): Promise<void>;
  deleteOne(id: ObjectId): Promise<void>;
  updateOne(id: ObjectId, data: object): Promise<void>;
}
