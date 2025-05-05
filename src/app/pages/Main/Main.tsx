import { useState } from "react";
import { getCategories, getNews } from "../../../api/apiNews";
import Categories from "../../../components/Categories/Categories";
import NewsBanner from "../../../components/NewsBanner/NewsBanner";
import NewsList from "../../../components/NewsList/NewsList";
import Pagination from "../../../components/Pagination/Pagination";
import Search from "../../../components/Search/Search";
import { PAGE_SIZE, TOTAL_PAGES } from "../../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import styles from "./Main.module.css";

const Main = () => {
  const [filters, setFilters] = useState<IFilters>({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const changeFilter = (key: string, value: string | number | null) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const { data, isLoading } = useFetch<NewsApiResponse, FilterTypes>(getNews, {
    ...filters,
    keywords: filters.keywords,
  });

  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(getCategories);

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    if (filters.page_number != pageNumber) {
      changeFilter("page_number", pageNumber);
    }
  };

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  return (
    <main className={styles.main}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => {
            changeFilter("category", category);
          }}
        />
      ) : null}
      <Search
        setKeywords={(keywords) => {
          changeFilter("keywords", keywords);
        }}
      />
      <NewsBanner isLoading={isLoading} news={data?.news[0]} />
      <Pagination
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        handleNextPage={handleNextPage}
      />
      <NewsList isLoading={isLoading} news={data?.news} />
      <Pagination
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        handleNextPage={handleNextPage}
      />
    </main>
  );
};

export default Main;
