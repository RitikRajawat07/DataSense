// src/services/authService.js
import api from "./api";

export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  } catch (error) {

    if (error.response) {
      throw {
        status: error.response.status,
        message: error.response.data?.message || 'Login failed',
        data: error.response.data
      };
    } 
    else if (error.request) {
      throw {
        status: 0,
        message: 'Network error. Please check your connection.',
        isNetworkError: true
      };
    } else {
      throw {
        status: -1,
        message: error.message || 'An unexpected error occurred'
      };
    }
  }
};