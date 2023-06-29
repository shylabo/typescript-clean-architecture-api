import { StatusCodes } from './status-codes';
import { Exception } from './exception';
import { Optional } from './type';

export abstract class Entity<TIdentifier extends string | number> {
  protected id: Optional<TIdentifier>;

  public getId(): TIdentifier {
    if (typeof this.id === 'undefined') {
      throw Exception.new({
        code: StatusCodes.STATUS_ENTITY_VALIDATION_ERROR,
        overrideMessage: `${this.constructor.name}: ID is empty.`,
      });
    }

    return this.id;
  }

  // TODO: Entity validation
}