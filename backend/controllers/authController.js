import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateToken } from "../services/tokenService.js";
import ErrorHandler from "../services/ErrorHandlerService.js";

// REGISTER USER
export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return next(ErrorHandler.badRequest("All fields are required"));

    const trimmedEmail = email.trim().toLowerCase();
    const existing = await User.findOne({ email: trimmedEmail });
    if (existing) return next(ErrorHandler.badRequest("Email already registered"));

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = await User.create({ name, email: trimmedEmail, password: hashedPass });

    // Generate token
    const token = generateToken({ id: newUser._id, email: newUser.email });

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      user: { id: newUser._id, name: newUser.name, email: newUser.email },
      token
    });
  } catch (error) {
    next(ErrorHandler.internal(error.message));
  }
};

// LOGIN USER
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return next(ErrorHandler.badRequest("Email & password are required"));

    const trimmedEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: trimmedEmail });
    if (!user) return next(ErrorHandler.notFound("User not found"));

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return next(ErrorHandler.unAuthorized("Invalid password"));

    const token = generateToken({ id: user._id, email: user.email });

    res.status(200).json({
      success: true,
      message: "Login Successful",
      user: { id: user._id, name: user.name, email: user.email },
      token
    });
  } catch (error) {
    next(ErrorHandler.internal(error.message));
  }
};
