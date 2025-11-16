import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      padding: "15px 25px",
      background: "#6a0dad",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0px 2px 12px rgba(0,0,0,0.15)"
    }}>
      <h2 style={{ fontWeight: "600" }}>📚 BookHive</h2>

      <div>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>Home</Link>
        <Link to="/login" style={{ color: "white", marginRight: "20px" }}>Login</Link>
        <Link to="/register" style={{ color: "white", marginRight: "20px" }}>Register</Link>
        <Link to="/profile" style={{ color: "white" }}>Profile</Link>
      </div>
    </nav>
  );
}
