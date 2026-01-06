import { HttpException } from './http-exception';

export class BadRequestException extends HttpException {
  constructor(message = 'Bad request') {
    super(message, 400);
  }
}

export class NotFoundException extends HttpException {
  constructor(message = 'Resource not found') {
    super(message, 404);
  }
}
