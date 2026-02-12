import axios from "axios";

const BASE_URL = "http://localhost:8080/api/products";

export const ReviewService = {

  addReview: (productId, userId, data) =>
    axios.post(`${BASE_URL}/${productId}/reviews?userId=${userId}`, data),

  getReviews: (productId) =>
    axios.get(`${BASE_URL}/${productId}/reviews`),

  getSummary: (productId) =>
    axios.get(`${BASE_URL}/${productId}/reviews/summary`),

 // ✅ FIXED
  deleteReview: (productId, reviewId) =>
    axios.delete(`${BASE_URL}/${productId}/reviews/${reviewId}`),

  // ✅ FIXED
  updateReview: (productId, reviewId, data) =>
    axios.put(`${BASE_URL}/${productId}/reviews/${reviewId}`, data)
};











