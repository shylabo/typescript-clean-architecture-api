import { User, UnmarshalledUser } from '../../../entities/user'

export class UserMapper {
  public static toDomain(raw: UnmarshalledUser): User {
    return User.create({
      id: raw.id,
      name: raw.name,
      email: raw.email,
      password: raw.password,
    })
  }
}
