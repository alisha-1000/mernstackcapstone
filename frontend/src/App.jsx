import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Redirect root "/" to /login */}
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;



// import React, { useEffect } from "react";
// import API from "./services/api";

// function App() {
//   useEffect(() => {
//     const testBackend = async () => {
//       try {
//         const res = await API.post("/api/auth/register", {
//           name: "TestUser",
//           email: "testuser@example.com",
//           password: "123456",
//         });
//         console.log("Response:", res.data);
//       } catch (err) {
//         console.error("Error:", err.response ? err.response.data : err.message);
//       }
//     };

//     testBackend();
//   }, []);

//   return <div>Check console for backend response</div>;
// }

// export default App;
// import React, { useEffect } from "react";
// import API from "./services/api";

// function App() {
//   useEffect(() => {
//     const testBackend = async () => {
//       const randomEmail = `testuser${Date.now()}@example.com`; // unique email each time
//       try {
//         const res = await API.post("/api/auth/register", {
//           name: "TestUser",
//           email: randomEmail,
//           password: "123456",
//         });
//         console.log("Response:", res.data);
//       } catch (err) {
//         console.error("Error:", err.response ? err.response.data : err.message);
//       }
//     };

//     testBackend();
//   }, []);

//   return <div>Check console for backend response</div>;
// }

// export default App;

// import React, { useEffect } from "react";
// import API from "./services/api";

// function App() {
//   useEffect(() => {
//     const testLogin = async () => {
//       try {
//         const res = await API.post("/api/auth/login", {
//           email: "testuser@example.com",
//           password: "123456",
//         });
//         console.log("Login Response:", res.data);
//       } catch (err) {
//         console.error("Login Error:", err.response ? err.response.data : err.message);
//       }
//     };

//     testLogin();
//   }, []);

//   return <div>Check console for login response</div>;
// }

// export default App;

