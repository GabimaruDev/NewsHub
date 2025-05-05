import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

export const getNews = async (props?: FilterTypes): Promise<NewsApiResponse> => {
  const { page_number = 1, page_size = 10, category, keywords } = props || {};

  try {
    const response = await axios.get<NewsApiResponse>(`${BASE_URL}search`, {
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
    return { news: [], page: 1, status: "error" };
  }
};

export const getCategories = async (): Promise<CategoriesApiResponse> => {
  try {
    const response = await axios.get<CategoriesApiResponse>(`${BASE_URL}available/categories`);
    return response.data;
  } catch (error) {
    console.error("ERROR GET CATEGORIES:", error);
    return { categories: [], description: "", status: "error" };
  }
};
