import jwt from "jsonwebtoken";
import ErrorHandler from "../services/ErrorHandlerService.js";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return next(ErrorHandler.unAuthorized("Access token missing"));

  const token = authHeader.split(" ")[1];
  if (!token) return next(ErrorHandler.unAuthorized("Access token missing"));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach payload to request
    next();
  } catch (error) {
    return next(ErrorHandler.unAuthorized("Invalid token"));
  }
};
