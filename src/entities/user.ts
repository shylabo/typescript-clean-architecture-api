import { Entity } from './entity';
import { genSalt, hash } from 'bcryptjs';

export interface UnmarshalledUser {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export class User extends Entity<UnmarshalledUser> {
  constructor(props: UnmarshalledUser) {
    const { id, ...data } = props;
    super(data, id);
  }

  public static async new(props: UnmarshalledUser): Promise<User> {
    const instance = new User(props);
    await instance.hashPassword();
    return instance;
  }

  // Returns the properties of the user instance as a plain object
  public unmarshall(): UnmarshalledUser {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    };
  }

  public async hashPassword(): Promise<void> {
    const salt: string = await genSalt();
    this.props.password = await hash(this.props.password, salt);
  }

  get id(): string | undefined {
    return this._id ? this._id : undefined;
  }

  get name(): string {
    return this.props.name;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }
}
