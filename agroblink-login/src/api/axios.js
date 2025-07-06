import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  // optional: headers or other configs
});
