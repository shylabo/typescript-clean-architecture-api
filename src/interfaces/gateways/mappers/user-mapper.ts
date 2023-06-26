import { User, UnmarshalledUser } from '../../../entities/user';

export class UserMapper {
  public static toDomainEntity(raw: UnmarshalledUser): User {
    return new User({
      id: raw.id,
      name: raw.name,
      email: raw.email,
      password: raw.password,
    });
  }

  public static toDomainEntities(raws: UnmarshalledUser[]): User[] {
    return raws.map((raw) => this.toDomainEntity(raw));
  }
}
