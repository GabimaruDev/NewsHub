import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

export const apiNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: { apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Error1:", error);
  }
};
