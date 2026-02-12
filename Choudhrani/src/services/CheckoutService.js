// import axios from "../utils/axiosInstance";

// const USER_ID = 1;

// export const CheckoutService = {
//   checkout: () => {
//     return axios.post(`/auth/checkout/${USER_ID}`);
//   },

//   getOrders: () => {
//     return axios.get(`/auth/checkout/${USER_ID}`);
//   },
// };





import axios from "../utils/axiosInstance";

const getUserId = () => {
  return localStorage.getItem("userId");
};

export const CheckoutService = {
  checkout: () => {
    const userId = getUserId();
    return axios.post(`/auth/checkout/${userId}`);
  },

  getOrders: () => {
    const userId = getUserId();
    return axios.get(`/auth/checkout/${userId}`);
  },
};
