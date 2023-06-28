import { StatusCodes } from '../../../shared/status-codes';
import { Nullable } from '../../../shared/type';

export class ApiResponse<TData> {
  public readonly code: number;
  public readonly message: string;
  public readonly data: Nullable<TData>;

  private constructor(code: number, message: string, data?: TData) {
    this.code = code;
    this.message = message;
    this.data = data || null;
  }

  public static success<TData>(data?: TData, code?: number, message?: string): ApiResponse<TData> {
    const resultCode: number = code || StatusCodes.STATUS_OK.code;
    const resultMessage: string = message || StatusCodes.STATUS_OK.message;

    return new ApiResponse(resultCode, resultMessage, data);
  }

  public static error<TData>(code?: number, message?: string, data?: TData): ApiResponse<TData> {
    const resultCode: number = code || StatusCodes.STATUS_INTERNAL_SERVER_ERROR.code;
    const resultMessage: string = message || StatusCodes.STATUS_INTERNAL_SERVER_ERROR.message;

    return new ApiResponse(resultCode, resultMessage, data);
  }
}
