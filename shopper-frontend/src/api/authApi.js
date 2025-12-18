// src/api/authApi.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/spstart";

export const registerUser = (data) => {
  return axios.post(`${BASE_URL}/spregister`, data);
};

export const loginUser = (data) => {
  return axios.post(`${BASE_URL}/splogin`, data);
};
