import { genSalt, hash } from 'bcryptjs';
import { Entity } from './entity';
import { Nullable } from '../shared/type';

export interface CreateUserEntityPayload {
  name: string;
  email: string;
  password: string;
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export class User extends Entity<number> {
  private name: string;
  private email: string;
  private password: string;
  private readonly createdAt: Date;
  private updatedAt: Date;
  private deletedAt: Nullable<Date>;

  constructor(payload: CreateUserEntityPayload) {
    super();

    this.name = payload.name;
    this.email = payload.email;
    this.password = payload.password;

    this.id = payload.id || undefined;
    this.createdAt = payload.createdAt || new Date();
    this.updatedAt = payload.createdAt || new Date();
    this.deletedAt = payload.deletedAt || null;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Nullable<Date> {
    return this.updatedAt;
  }

  public getDeletedAt(): Nullable<Date> {
    return this.deletedAt;
  }

  public async hashPassword(): Promise<void> {
    const salt: string = await genSalt();
    this.password = await hash(this.password, salt);
  }

  public static async new(payload: CreateUserEntityPayload): Promise<User> {
    const user = new User(payload);
    await user.hashPassword();

    return user;
  }
}
