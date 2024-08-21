import axios from "axios";

export const authClient = axios.create({
  baseURL: "http://127.0.0.1:5000/api" + "/auth",
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const llamaClient = axios.create({
  baseURL: "http://127.0.0.1:5000/api" + "/ollama",
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});
