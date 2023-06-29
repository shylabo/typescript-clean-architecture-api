export interface CreateUserEntityPayload {
  name: string;
  email: string;
  password: string;
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
