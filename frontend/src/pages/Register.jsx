import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import "../styles/global.css";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // Helper function to validate email format
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // Check email format
    if (!isValidEmail(form.email)) {
      setIsError(true);
      setMessage("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password,
      };

      const res = await axios.post(
        "http://localhost:4000/api/auth/register",
        payload
      );

      if (res.data.token) {
        login(res.data.token); // Auto-login
        setIsError(false);
        setMessage(res.data.message || "Registration successful!");
        navigate("/dashboard");
      }
    } catch (err) {
      setIsError(true);
      setMessage(err.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="center-box auth-card">
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Sign up to start using BookHive</p>
        {message && <p className={isError ? "error" : "success"}>{message}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="name"
              placeholder=" "
              value={form.name}
              onChange={handleChange}
              required
            />
            <label>Full Name</label>
            <i className="fa fa-user"></i>
          </div>

          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
            <i className="fa fa-envelope"></i>
          </div>

          <div className="input-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder=" "
              value={form.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
            <i
              className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? "Please wait..." : "Register"}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
