import { useEffect, useState } from "react";
import { getCategories, getNews } from "../../../api/apiNews";
import Categories from "../../../components/Categories/Categories";
import NewsBanner from "../../../components/NewsBanner/NewsBanner";
import NewsList from "../../../components/NewsList/NewsList";
import Pagination from "../../../components/Pagination/Pagination";
import Skeleton from "../../../components/Skeleton/Skeleton";
import styles from "./Main.module.css";

const Main = () => {
  const [news, setNews] = useState<NewsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage: number, selectedCategory: string) => {
    try {
      setIsLoading(true);
      const response = await getNews(currentPage, pageSize, selectedCategory === "All" ? null : selectedCategory);
      if (response) {
        setNews(response.news);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("ERROR FETCH NEWS:", error);
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      if (response) {
        setCategories(["All", ...response.categories]);
      }
    } catch (error) {
      console.error("ERROR FETCH CATEGORIES:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currentPage, selectedCategory);
  }, [currentPage, selectedCategory]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    if (currentPage != pageNumber) {
      setCurrentPage(pageNumber);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {news.length && !isLoading ? <NewsBanner news={news[0]} /> : <Skeleton count={1} type={"banner"} />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        handleNextPage={handleNextPage}
      />
      {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type={"item"} />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        handleNextPage={handleNextPage}
      />
    </main>
  );
};

export default Main;
