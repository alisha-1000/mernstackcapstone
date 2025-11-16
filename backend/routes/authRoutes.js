import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js"; // ✅ fixed

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", verifyToken, (req, res) => {
  res.status(200).json({
    success: true,
    user: {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    }
  });
});

export default router;

