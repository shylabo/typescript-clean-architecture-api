import { Entity } from './entity'

export interface UnmarshalledUser {
  id?: string
  name: string
  email: string
  password: string
}

export class User extends Entity<UnmarshalledUser> {
  private constructor(props: UnmarshalledUser) {
    const { id, ...data } = props
    super(data, id!)
  }

  public static create(props: UnmarshalledUser): User {
    const instance = new User(props)
    return instance
  }

  // Returns the properties of the user instance as a plain object
  public unmarshall(): UnmarshalledUser {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    }
  }

  get id(): string | undefined {
    return this._id ? this._id : undefined
  }

  get name(): string {
    return this.props.name
  }

  get email(): string {
    return this.props.email
  }

  get password(): string {
    return this.props.password
  }
}
