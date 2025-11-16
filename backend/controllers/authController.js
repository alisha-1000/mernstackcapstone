import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateToken } from "../services/tokenService.js";
import ErrorHandler from "../services/ErrorHandlerService.js";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return next(ErrorHandler.badRequest("All fields are required"));

    const existing = await User.findOne({ email });
    if (existing) return next(ErrorHandler.badRequest("Email already registered"));

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = await User.create({ name, email, password: hashedPass });

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      user: { id: newUser._id, email: newUser.email, name: newUser.name }
    });
  } catch (error) {
    next(ErrorHandler.internal(error.message));
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return next(ErrorHandler.badRequest("Email & password are required"));

    const user = await User.findOne({ email });
    if (!user) return next(ErrorHandler.notFound("User not found"));

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return next(ErrorHandler.unAuthorized("Invalid password"));

    const token = generateToken({ id: user._id, email: user.email });

    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: true,       // set false for local testing
      sameSite: "none",   // set "lax" for local testing
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token
    });
  } catch (error) {
    next(ErrorHandler.internal(error.message));
  }
};
