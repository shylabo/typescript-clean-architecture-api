import { Document, ObjectId, WithId } from 'mongodb';

export interface NoSQLDatabaseClient {
  find(query: object): Promise<WithId<Document>[]>;
  insertOne(doc: any): Promise<void>;
  deleteOne(id: ObjectId): Promise<void>;
  updateOne(id: ObjectId, data: object): Promise<void>;
}
