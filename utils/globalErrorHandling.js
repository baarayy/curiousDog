export const globalErrorHandler = (err, req, res, next) => {
  let status = err.status || 400;
  res.status(status).json({
    message: err.message,
    status,
    stack: err.stack,
  });
};
