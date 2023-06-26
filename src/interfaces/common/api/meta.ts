export interface IMeta {
  code: number;
  message: string;
}
// HTTP status codes as registered with IANA.
// https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
export class Meta {
  /**
   * 1xx: Informational - Request received, continuing process
   */

  /**
   * 2xx: Success - The action was successfully received, understood, and accepted
   */
  public static STATUS_OK: IMeta = {
    code: 200,
    message: 'OK',
  };

  public static STATUS_CREATED: IMeta = {
    code: 201,
    message: 'Created',
  };

  /**
   * 3xx: Redirection - Further action must be taken in order to complete the request
   */

  /**
   * 4xx: Client Error - The request contains bad syntax or cannot be fulfilled
   */
  public static STATUS_BAD_REQUEST: IMeta = {
    code: 400,
    message: 'Bad Request',
  };

  /**
   * 5xx: Server Error - The server failed to fulfill an apparently valid request
   */
  public static STATUS_INTERNAL_SERVER_ERROR: IMeta = {
    code: 500,
    message: 'Internal Server Error',
  };
}
