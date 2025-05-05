interface INews {
  author: string;
  category: string[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

interface IFilters {
  page_number: number;
  page_size: number;
  category: string | null;
  keywords: string;
}

type FilterTypes = Partial<IFilters>;

interface NewsApiResponse {
  news: NewsProps[];
  page: number;
  status: string;
}

type SkeletonType = "banner" | "item";

interface CategoriesApiResponse {
  categories: string[];
  description: string;
  status: string;
}
