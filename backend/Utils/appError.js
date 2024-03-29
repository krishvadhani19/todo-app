class AppError extends Error {
  // using the predefined constructor of error class
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "Fail" : "Error";
    console.log("App Error chlalu hai");
  }
}

module.exports = AppError;
