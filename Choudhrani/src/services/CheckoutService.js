import axios from "../utils/axiosInstance";

const USER_ID = 1;

export const CheckoutService = {
  checkout: () => {
    return axios.post(`/auth/checkout/${USER_ID}`);
  },

  getOrders: () => {
    return axios.get(`/auth/checkout/${USER_ID}`);
  },
};
