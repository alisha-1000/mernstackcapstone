import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/global.css";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-wrapper">
      <div className="center-box auth-card">
        <h1 className="auth-title">Welcome to BookHive!</h1>
        <p className="auth-subtitle">
          You are logged in as: <strong>{user?.email || "User"}</strong>
        </p>

        <button className="btn-primary" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
