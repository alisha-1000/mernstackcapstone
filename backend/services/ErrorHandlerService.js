class ErrorHandler {
  constructor(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
  }

  static badRequest(msg = "Bad Request") {
    return new ErrorHandler(400, msg);
  }

  static unAuthorized(msg = "Unauthorized") {
    return new ErrorHandler(401, msg);
  }

  static notFound(msg = "Not Found") {
    return new ErrorHandler(404, msg);
  }

  static internal(msg = "Internal Server Error") {
    return new ErrorHandler(500, msg);
  }
}

export default ErrorHandler;
