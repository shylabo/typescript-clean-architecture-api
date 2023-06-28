import { User } from '../../../entities/user';

export class UserMapper {
  public static toDomainEntity(raw: any): User {
    const domainUser: User = new User({
      name: raw.name,
      email: raw.email,
      password: raw.password,
      id: raw.id,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      deletedAt: raw.deletedAt,
    });

    return domainUser;
  }

  public static toDomainEntities(raws: any[]): User[] {
    return raws.map((raw) => this.toDomainEntity(raw));
  }
}
