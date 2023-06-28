import { StatusCode } from './status-codes';
import { Optional } from './type';

export type CreateExceptionPayload<TData> = {
  code: StatusCode;
  overrideMessage?: string;
  data?: TData;
};

export class Exception<TData> extends Error {
  public readonly code: number;
  public readonly data: Optional<TData>;

  private constructor(statusCode: StatusCode, overrideMessage?: string, data?: TData) {
    super();

    this.name = this.constructor.name;
    this.code = statusCode.code;
    this.data = data;
    this.message = overrideMessage || statusCode.message;

    Error.captureStackTrace(this, this.constructor);
  }

  public static new<TData>(payload: CreateExceptionPayload<TData>): Exception<TData> {
    return new Exception(payload.code, payload.overrideMessage, payload.data);
  }
}
