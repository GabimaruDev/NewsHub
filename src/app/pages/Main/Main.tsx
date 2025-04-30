import { useEffect, useState } from "react";
import { apiNews } from "../../../api/apiNews";
import NewsBanner from "../../../components/NewsBanner/NewsBanner";
import NewsList from "../../../components/NewsList/NewsList";
import Pagination from "../../../components/Pagination/Pagination";
import Skeleton from "../../../components/Skeleton/Skeleton";
import styles from "./Main.module.css";

const Main = () => {
  const [news, setNews] = useState<NewsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage: number) => {
    try {
      setIsLoading(true);
      const response = await apiNews(currentPage, pageSize);
      if (response) {
        setNews(response.news);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("ERROR FETCH NEWS:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

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
