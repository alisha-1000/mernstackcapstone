// import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_URL, // matches your .env
// });

// export default API;

// src/services/api.js
import axios from "axios";

// Base URL for backend API
const API = axios.create({
  baseURL: "https://mernstackcapstone.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
