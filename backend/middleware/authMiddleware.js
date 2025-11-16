import jwt from "jsonwebtoken";
import ErrorHandler from "../services/ErrorHandlerService.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;

    if (!token) return next(ErrorHandler.unAuthorized("Access token missing"));

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (err) {
    return next(ErrorHandler.unAuthorized("Invalid or expired token"));
  }
};

export default authMiddleware;
