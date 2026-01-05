import axios from "axios";
import axiosInstance from "../utils/axiosInstance";

const BASE_URL = "http://localhost:8080";

// 🔓 PUBLIC APIs (NO JWT)
export const registerUser = (data) =>
  axios.post(`${BASE_URL}/auth/register`, data);

export const loginUser = (data) =>
  axios.post(`${BASE_URL}/auth/login`, data);

export const verifyEmailOtp = (email, otp) =>
  axios.post(
    `${BASE_URL}/auth/verify-email-otp?email=${email}&otp=${otp}`
  );

export const verifyPhoneOtp = (phone, otp) =>
  axios.post(
    `${BASE_URL}/auth/verify-phone-otp?phone=${phone}&otp=${otp}`
  );

export const forgotPassword = (email) =>
  axios.post(`${BASE_URL}/auth/forgot-password`, { email });

export const resetPassword = (token, newPassword) =>
  axios.post(
    `${BASE_URL}/auth/reset-password?token=${token}&newPassword=${newPassword}`
  );

// 🔐 PROTECTED APIs (JWT REQUIRED) – future use
export const getDashboard = () =>
  axiosInstance.get("/dashboard");
