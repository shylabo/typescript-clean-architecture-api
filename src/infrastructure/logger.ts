import winston, { format } from 'winston';

class Logger {
  private static instance: Logger;
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.errors({ stack: true }),
        format.splat(),
        format.simple(),
      ),
      defaultMeta: { service: 'winston-test-api' },
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: '.log/error.log',
          level: 'error',
        }),
        new winston.transports.File({ filename: '.log/combined.log' }),
      ],
    });
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public error(message: string, trace: any) {
    this.logger.error(message, trace);
  }

  public warn(message: string) {
    this.logger.warn(message);
  }

  public info(message: string) {
    this.logger.info(message);
  }

  public debug(message: string) {
    this.logger.debug(message);
  }
}

export default Logger;
