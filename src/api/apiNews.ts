import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

interface getNewsProps {
  page_number: number;
  page_size: number;
  category: string | null;
  keywords?: string | null;
}

export const getNews = async (props: getNewsProps) => {
  const { page_number, page_size, category, keywords } = props;
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number: page_number,
        page_size: page_size,
        category: category,
        keywords: keywords,
      },
    });
    return response.data;
  } catch (error) {
    console.error("ERROR GET NEWS:", error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`);
    return response.data;
  } catch (error) {
    console.error("ERROR GET CATEGORIES:", error);
  }
};
