// src/pages/Profile.jsx
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "../styles/global.css";

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="profile-container">
        <h2>You are not logged in</h2>
        <Link to="/register" className="profile-btn">
          Register / Login
        </Link>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <p>Account created at: {new Date(user.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default Profile;
