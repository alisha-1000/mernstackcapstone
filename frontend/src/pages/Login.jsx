import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import "../styles/global.css";
import API from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);


  // Email validation
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!isValidEmail(email)) {
      setIsError(true);
      setMessage("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const payload = { email: email.trim().toLowerCase(), password };
      // const res = await axios.post("http://localhost:4000/api/auth/login", payload);
      const res = await API.post("/auth/login", payload);

      if (res.data.token) {
        login(res.data.token); // save token in context
        setIsError(false);
        setMessage(res.data.message || "Login successful!");
        navigate("/dashboard");
      }
    } catch (err) {
      setIsError(true);
      setMessage(err.response?.data?.message || "Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="center-box auth-card">
        <h2 className="auth-title">Welcome Back!</h2>
        <p className="auth-subtitle">Login to access your BookHive Dashboard</p>
        {message && <p className={isError ? "error" : "success"}>{message}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
            <i className="fa fa-envelope"></i>
          </div>

          <div className="input-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
            <i
              className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? "Please wait..." : "Login"}
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
